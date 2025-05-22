import React from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setSidebaropen } from '../../redux/slices/sidebarSlice'
const Appbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(setSidebaropen())} className='lg:hidden text-black'>
        <MdOutlineMenu />
      </button>
    </div>
  )
}

export default Appbar
