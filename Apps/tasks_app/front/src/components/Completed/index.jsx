import React from 'react'
import ItemPanel from '../Common/ItemPanel'
import NavBar from '../Common/NavBar'
const index = () => {
  return (
    <div className='page-section'>
      <NavBar/>
      <ItemPanel pageTitle="Completed Items"/>
    </div>
  )
}

export default index
