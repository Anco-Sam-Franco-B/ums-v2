import React from 'react'
import { useLocation } from 'react-router-dom'

function Title(props) {
  return (
    <div className="flex w-full px-2 pt-2 items-center justify-between">
            <h1 className='text-sm p-2 text-white w-14 text-center font-medium bg-gradient-to-r from-blue-700 to-blue-500 shadow-md rounded-full'>Users</h1>
            <button onClick={()=>props.func()} className='cursor-pointer text-sm p-2 px-5 hover:opacity-85 active:scale-90 transition-all delay-75 text-white text-center font-medium bg-gradient-to-r from-blue-700 to-blue-500 shadow-md rounded-full'>Refresh</button>
    </div>
  )
}

export default Title
