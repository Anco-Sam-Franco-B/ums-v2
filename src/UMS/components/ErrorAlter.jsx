import React from 'react'
import { useLocation } from 'react-router-dom'

function ErrorAlter(props) {
    const error=props.err
  return (
    <div className='w-[350px] shadow-lg animate-bounce hover:animate-none cursor-pointer bg-gradient-to-r from-red-800 to-red-500 p-3 rounded-md'>
        <div className="flex w-full items-center">
            <h1 className='text-2xl text-'>⚠</h1>
            <h1 className='text-xl text-center text-red-200 font-medium'>{error.message}</h1>
        </div>
        <div className="p-1 text-xs font-bold bg-white text-gray-700 mt-2 rounded-md">
            <p>{error.code}</p>
        </div>
        <div className="mt-2">
            <button onClick={()=>props.fun()} className='bg-red-500 p-2 text-xs rounded-md text-white font-medium'>Refresh</button>
        </div>
    </div>
  )
}

export default ErrorAlter
