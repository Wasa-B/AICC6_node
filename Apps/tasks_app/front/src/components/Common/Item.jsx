import React from 'react'
import { MdEditDocument } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'

const Item = ({task}) => {
  const {_id, title, description, date, iscompleted, isimportant, userid} = task;
  const textLengthOverCut = (text, length, lastText) => {
    if(!length) length = 20;
    if(!lastText) lastText = '...';
    if (text.length > length) {
      return text.substring(0, length) + lastText
    }
    return text
  }
  // console.log(item);
  return (
    <div className='item w-1/3 h-[25vh] p-[0.25rem]'>
      <div className="w-full h-full border border-gray-500 rounded-md flex py-3 px-4 flex-col justify-between bg-gray-950">
        <div className="item-upper">
          <h2 className="item-title text-xl font-normal mb-3 relative pb-2 flex justify-between border-b-[1px] border-gray-500">
            <span className=''>{title}</span>
            <span className='text-sm py-1 px-3 border border-gray-500 rounded-sm hover:bg-gray-700 cursor-pointer'>자세히</span>
          </h2>
          <p className="item-description">
            {textLengthOverCut(description)}
          </p>
        </div>
        <div className="item-lower">
          <p className='item-date text-sm mb-1'>{date}</p>
          <div className='item-footer flex justify-between'>
            <div className='item-footer-left flex gap-2'>
              {
                iscompleted
                ?(<button className="item-competed block py-1 px-4 bg-lime-600 text-sm text-white rounded-md">Completed</button>)
                :(<button className="item-competed block py-1 px-4 bg-cyan-600 text-sm text-white rounded-md">Completed</button>)
              }
              {
                isimportant
                ?(<button className="item-important block py-1 px-4 bg-red-600 text-sm text-white rounded-md">Important</button>)
                :("")
              }
            </div>
            <div className='item-footer-right flex gap-2'>
              <button><MdEditDocument className='w-5 h-5'/></button>
              <button><FaTrash/></button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Item
