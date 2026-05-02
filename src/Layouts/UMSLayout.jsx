import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../UMS/components/NavBar'
import TopNavAr from '../UMS/components/TopNavAr'

function Layout() {
  return (
    <div className='w-full flex p-2 h-screen overflow-hidden bg-blue-200'>
      <NavBar/>
      <div className='w-[82%] h-screen overflow-hidden pl-2'>
        <TopNavAr/>
        <div className="w-full py-2">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout
