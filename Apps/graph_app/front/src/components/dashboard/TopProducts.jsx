import React, { useEffect } from 'react'
import HeadTitle from './HeadTitle'
import { useDispatch, useSelector} from 'react-redux';
import { fetchTopProducts } from '../../redux/slices/apiSlice';

const TopProducts = () => {
  const topProducts = useSelector((state) => state.apis.topProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopProducts());
  }, [dispatch]);
  // console.log(topProducts)
  return (
    <div className='block-wrap my-[14px] w-full lg:w-auto sm:mt-[14px] lg:mt-0'>
      <HeadTitle title='Top Products'/>
      <div className="table-products">
        <table className='md:min-w-[500px] w-full'>
          <thead>
            <tr>
              <th className="tbl-title">#</th>
              <th className="tbl-title">Name</th>
              <th className="tbl-title">Popularity</th>
              <th className="tbl-title hidden lg:table-cell">Sales</th>
            </tr>
          </thead>
          <tbody>
            {topProducts?.map((item, idx)=>(
              <tr key={idx}>
                <td className='tbl-data'>{item.id}</td>
                <td className='tbl-data'>{item.name}</td>
                <td className='tbl-data'>
                  <div className='bg-[#f0f9ff] w-[180px] h-[5px] rounded-full overflow-hidden relative'>
                    <div className={`bg-[#0095ff] absolute left-0 top-0 h-full rounded-full`} 
                    style={{width: `${item.papularitypercent}%`}}
                    ></div>

                  </div>
                </td>
                <td className='tbl-data hidden lg:table-cell'>
                <div className='rounded-lg text-center text-[12px] font-semibold bg-white border border-[#0095ff] text-[#0095ff] px-2 py-1'>
                  {item.salespercent}%
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopProducts
