import React from 'react'

const HeadTitle = ({title}) => {
  return (
    <div className='block-title'>
      <div className="title-wrapper mt-1">
        <h3 className='md:text-xl text-sm font-bold'>{title}</h3>
      </div>
    </div>
  )
}

export default HeadTitle
