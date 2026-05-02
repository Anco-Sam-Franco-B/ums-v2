import React from 'react'
import { Link, parsePath, useLocation } from 'react-router-dom'

function NavBar() {
    const location=useLocation()
  return (
    <div className='w-[18%] h-full bg-white/80 rounded-md shadow-lg p-4'>
        <h1 className='text-2xl text-blue-500 mb-3'>UM<sup className='font-semibold text-sm text-indigo-500'>System</sup></h1>
        <hr />
        <nav className='text-xs py-5 flex flex-col gap-2'>
            <Link to='/' className={`p-2 w-full  rounded-md hover:text-blue-500 transition-all delay-150 hover:delay-200 font-medium  ${location.pathname ==='/'? 'text-white bg-gradient-to-r hover:text-white from-blue-600 to-blue-400 animate-bounce font-normal hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 transition-all delay-150 hover:delay-200': ''}`}>Dashboard</Link>
            <Link to='/users' className={`p-2 w-full  rounded-md hover:text-blue-500 transition-all delay-150 hover:delay-200 font-medium  ${location.pathname ==='/users'? 'text-white bg-gradient-to-r hover:text-white from-blue-600 to-blue-400 animate-bounce font-normal hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 transition-all delay-150 hover:delay-200': ''}`}>Users</Link>
            <Link to='/create' className={`p-2 w-full  rounded-md hover:text-blue-500 transition-all delay-150 hover:delay-200 font-medium  ${location.pathname ==='/create'? 'text-white bg-gradient-to-r hover:text-white from-blue-600 to-blue-400 animate-bounce font-normal hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 transition-all delay-150 hover:delay-200': ''}`}>Register User</Link>
        </nav>
    </div>
  )
}

export default NavBar
