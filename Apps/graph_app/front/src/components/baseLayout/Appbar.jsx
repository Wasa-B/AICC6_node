import React from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setSidebaropen } from '../../redux/slices/sidebarSlice'
import AppbarLang from './AppbarLang'
import { Icons } from '../../assets/icons'
import AppbarProfile from './AppbarProfile'
const Appbar = () => {
  const dispatch = useDispatch();
  return (
    <div className='appbar-wrapper lg:ml-[calc(20%+14px)] 
    lg:w-[calc(80%-28px)] w-full overflow-hidden bg-gray-950 py-3 px-6 
    rounded-sm shadow-[0_0_0.25rem_rgba(255,255,255,0.3)]
    text-gray-300
    '>
      <div className='appbar-contents flex items-center justify-between'>
        <div className='appbar-left flex items-center gap-x-3'>
          <button onClick={()=>dispatch(setSidebaropen())} className='lg:hidden'>
            <MdOutlineMenu />
          </button>
          <h3 className='appbar-title text-xl font-semibold hidden sm:block'>Dashboard</h3>
        </div>
        <div className='appbar-right flex items-center gap-4'>
          <div className="appbar-search">
            <form action="" className='input-group flex items-center bg-gray-700
            lg:h-11 h-9 min-w-40 
            lg:min-w-80 sm:min-w-60 
            lg:py-1 py-0 lg:px-3 px-2
            rounded-xl
            '>
              <span className='input-icon w-5 place-content-center'>
                <img src={Icons.SearchBlue} alt="" className=''/>
              </span>
              <input type="text" placeholder='Search' className='outline-none
              lg:text-[15px] text-[12px] bg-gray-700 text-white px-3 placeholder:text-gray-400
              w-[70px] sm:w-full
              '/>
            </form>
          </div>
          <AppbarLang/>
          <button className="notification relative block rounded-md w-8 h-8">
            <img src={Icons.NotificationOrange} alt="" className='w-6'/>
            <span className='w-2 h-2 bg-red-600 rounded-full absolute top-1 right-2'></span>
          </button>
          <AppbarProfile/>
        </div>
      </div>
    </div>
  )
}

export default Appbar
