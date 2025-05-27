import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navMenus } from '../../utils/menuList'
import { FcGoogle } from 'react-icons/fc'
const NavBar = () => {
  const path = useLocation().pathname;
  return (
    <nav className='bg-[#212121] w-1/5 h-full rounded-r-lg border border-gray-500 py-10 px-4
      flex flex-col justify-between items-center
    '>
      <div className="logo-wrapper flex w-full items-center justify-center gap-8">
        <div className="logo"></div>
        <h2 className='font-semibold text-xl'>
          <Link to="/">
            Task
          </Link>
        </h2>
      </div>
      <ul className='menus'>
      {navMenus.map((menu, idx) => (
        <li key={idx} className={
        `mb-1 rounded-md border 
        border-gray-700 hover:bg-gray-950 animate-all duration-300
        ${path === menu.to ? 'bg-gray-950' : ''}`
        }>
          <Link to={menu.to} className='flex gap-x-4 items-center py-2 px-10'>
            {menu.icon}
            <span>{menu.label}</span>
          </Link>
        </li>
      ))}
      </ul>
      <div className="auth-wrapper w-4/5 flex justify-center">
        <button className="login-btn flex justify-center items-center gap-2 bg-gray-400 text-gray900 py-3 px-4 rounded-md w-full">
          <FcGoogle/>
          <span>Google Login</span>
        </button>
      </div>
    </nav>
  )
}

export default NavBar
