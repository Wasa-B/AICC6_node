import React, { useEffect, useState } from 'react'
import Item from './Item';
import { useDispatch, useSelector } from 'react-redux';
import AddItem from './AddItem';
import PageTitle from './PageTitle';
import { fetchGetItems } from '../../redux/slices/apiSlice';
import { SkeletonTheme } from 'react-loading-skeleton';
import LoadingSkeleton from './LoadingSkeleton';
import ItemModal from './ItemModal';

const ItemPanel = ({pageTitle, itemFilter}) => {
  const [isLoading, setIsLoading] = useState(true);
  // Auth Data Variable
  const authData = useSelector((state) => state.auth.authData);
  const userKey = authData?.sub;

  // API Data Variable
  const getItemsData = useSelector((state) => state.api.getItemsData);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!userKey)return;
    if(getItemsData != null){
      setIsLoading(false);
      return;
    }
    // useEffect 내부에서 dispatch 함수를 호출할 때는 async/await를 사용할 수 없을때 unwrap()을 사용;
    const fetchGetItemsData = async ()=>{
      try {
        await dispatch(fetchGetItems(userKey)).unwrap();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGetItemsData();
  },[userKey]);


  const filterItems = ()=>{
    if(!itemFilter) return getItemsData;
    return getItemsData?.filter(itemFilter);
  }

  // console.log(getItemsData);
  return (
    <div className='panel bg-[#212121] w-[80%] rounded-lg border border-gray-500 py-5 px-4
    flex flex-col gap-4 overflow-y-auto
    '>
      {
        userKey
        ? (
          <div className='login-message w-full h-full'>
            <PageTitle title={pageTitle} />
            <div className="items-wrapper
            w-full h-auto flex flex-wrap justify-start items-start">
                {
                  isLoading
                  ?(
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      {Array.from({length: 5}).map((_, idx)=>(
                        <LoadingSkeleton key={idx}/>
                      ))}
                    </SkeletonTheme>
                  )
                  :(
                    <>
                    {
                      filterItems()?.map((task)=>(
                        <Item key={task._id} task={task}/>
                      ))
                    }
                    <AddItem />
                    </>
                  )
                }
                <div className="add-item">
              </div>
            </div>
          </div>
        )
        :(
          <div className="login-message w-full h-full flex items-center justify-center">
            <button className="flex justify-center items-center gap-2 bg-gray-300 text-gray-900 py-2 px-4 rounded-md">
              <span className="text-sm font-semibold">
                로그인이 필요한 서비스 입니다.
              </span>
            </button>
          </div>
        )
      }
      <ItemModal />
    </div>
  )
}

export default ItemPanel
