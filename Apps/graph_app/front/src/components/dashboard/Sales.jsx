import React from 'react'
import HeadTitle from './HeadTitle'
import { Icons } from '../../assets/icons'
import { SALES_LISTS } from '../../constants/menuList'

const Sales = () => {
  return (
    <div className='block-wrap w-full'>
      <div className='block-head flex justify-between items-center'>
        <HeadTitle title="Today's Sales"/>
        <div className="export-btn
        border border-gray-500 rounded-lg py[2px] px-2 font-semibold
        ">
          <button className='flex items-center gap-[6px]'>
            <img src={Icons.ExportDark} alt="" className='invert-[1]' />
            <span className='text-sm font-medium'>Export</span>
          </button>
        </div>
      </div>

      <div className="sales-cards flex flex-wrap gap-4 mt-6 sm:grid sm:grid-cols-4">
        {
          SALES_LISTS.map((item, idx)=>(
            <div key={idx} className="card-item 
              w-[calc(50%-8px)] sm:w-full
              border border-gray-500 rounded-md py-4 px-[18px] overflow-hidden">
              <div className="card-icon 
                w-11 h-11 rounded-full flex items-center justify-center border border-gray-500">
                <img src={item.src} alt={item.alt} />
              </div>
              <div className="card-value font-bold text-xl mt-3 mb-1">{item.value}</div>
              <p className="card-title font-semibold mb-3">{item.title}</p>
              <span className="card-text text-[14px] font-normal">{item.text}</span>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Sales
