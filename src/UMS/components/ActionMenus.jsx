import React from 'react'
import { Link } from 'react-router-dom'

function ActionMenus(props) {
    const keys=props.keys
    const handleMouseEnterOpen=()=>{
        const menu=document.querySelector(".action-menu")
        menu.classList.add('enter')
    }
    const handleMouseLeaveClose=()=>{
       const menu=document.querySelector(".action-menu")
        menu.classList.remove('enter')
    }
  return (
    <div>
        <button onMouseEnter={handleMouseEnterOpen} className='font-extrabold text-gray-600 cursor-pointer active:scale-90 flex items-center justify-center  '>•••</button>
        <div  onMouseLeave={handleMouseLeaveClose} className="action-menu absolute w-[150px] flex left-0 top-0 opacity-0 scale-0 flex-col rounded-md shadow-md bg-white/80 backdrop-blur-lg z-10 gap-1 p-3 ">
            <h2 className='text-xs text-gray-500 font-medium'>Action Menus</h2>
            <hr className='mb-2'/>
            <Link className="cursor-pointer text-sm p-1 px-3 hover:opacity-85 active:scale-90 transition-all delay-75 text-white  bg-gradient-to-r from-blue-700 to-blue-500  text-center shadow-md rounded-full">Edit</Link>
        <button className="cursor-pointer text-sm p-1 px-3 hover:opacity-85 active:scale-90 transition-all delay-75 text-white  bg-gradient-to-r from-sky-700 to-sky-500 shadow-md rounded-full">Status</button>
        <button className="cursor-pointer text-sm p-1 px-5 hover:opacity-85 active:scale-90 transition-all delay-75 text-white  bg-gradient-to-r from-red-700 to-red-500 shadow-md rounded-full">Delete</button>
        </div>
    </div>
  )
}

export default ActionMenus
