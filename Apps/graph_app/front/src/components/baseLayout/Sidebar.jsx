import React, { useState } from 'react'
import { Icons } from '../../assets/icons'
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar, setSidebarclose } from '../../redux/slices/sidebarSlice'
import { MENU_LISTS, routes } from '../../constants/menuList'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
const Sidebar = () => {
  const [currentMenu, setCurrentMenu] = useState(0);
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const slecteMenuHandler = (index) => {
    setCurrentMenu(index);
  }

  return (
    <div className={`sidebar-wrapper 
    ${isSidebarOpen
      ? 'left-0' 
      : 'left-[-100%]'}
    h-full lg:w-[20%] md:w-[30%] w-[50%]
    flex flex-col rounded-r-sm z-[999]
    fixed lg:left-0
    bg-gray-950 py-5 px-4 
    shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)]
    transition-all duration-300
`}>
      <div className="sidebar-top
      mb-[32px] flex items-center justify-between
      ">
        <div className={`sidebar-brand
         flex items-center justify-center gap-x-[12px]
        `}>
          <span className='brand-logo 
          bg-blue-700 rounded-md w-8 h-8
          flex place-content-center'>
            <img src={Icons.LogoWhite} alt="logo" className='w-5'/>
          </span>
          <span>SideBar</span>
        </div>
        <button className="sidebar-close
        text-black p-[.125rem] rounded-sm bg-white
        cursor-pointer hover:bg-gray-300 lg:hidden"
        onClick={()=>dispatch(setSidebarclose())}>
          <MdOutlineClose />
        </button>
      </div>
      <div className="sidebar-body flex w-full mt-[8rem]">
          <BrowserRouter>
            <Routes>
              {
              routes.map((routes, idx)=>(
                <Route key={idx} path={routes.path} element={routes.element}/>
              ))}
            </Routes>
            <div className='sidebar-menu w-full'>
              <ul className="menu-lists flex flex-col gap-y-1.5">
                {MENU_LISTS.map((menu, index)=>(
                  <li key={index} className='menu-list'>
                    <Link to={menu.path} 
                    onClick={()=>slecteMenuHandler(index)}
                    className={`menu-link 
                    flex items-center py-0.5 px-5 font-medium gap-x-[14px] h-[44px]
                    ${currentMenu===index ? 'bg-blue-700 text-white rounded-sm' : ''}`}>
                      <span className={`menu-icon w-5
                        ${currentMenu===index ? 'invert-[1] brightness-[100%]' : ''}`
                      }>
                        <img src={menu.icon} alt={menu.alt} />
                      </span>
                      <span className='menu-title'>{menu.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </BrowserRouter>
      </div>
    </div>
  )
}

export default Sidebar
