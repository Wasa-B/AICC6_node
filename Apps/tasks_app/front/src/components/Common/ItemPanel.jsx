import React from 'react'
import Item from './Item';

const ItemPanel = ({pageTitle}) => {
  const userKey = true;
  return (
    <div className='panel bg-[#212121] w-[80%] rounded-lg border border-gray-500 py-5 px-4
    flex flex-col gap-4 overflow-y-auto
    '>
      {
        userKey
        ? (
          <>
            <div className="title-wrapper rounded-lg border border-gray-500 py-2 px-2">
              <h2>{pageTitle}</h2>
            </div>
            <div className="items-wrapper
            w-full h-auto flex flex-wrap justify-start items-start">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <div className="add-item">
              </div>
            </div>
          </>
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
    </div>
  )
}

export default ItemPanel
