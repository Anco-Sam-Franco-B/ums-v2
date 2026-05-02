import React from 'react'

function DCard(props) {
  return (
    <div className='w-[200px] flex flex-col overflow-hidden h-24 bg-gradient-to-r from-blue-700 to-blue-500 shadow-md rounded-md'>
      <div className="w-full p-3 text-md">
        <h1 className='font-medium text-white'>{props.title}</h1>
      </div>
      <div className="w-full flex items-center p-3 text-4xl  font-bold justify-end h-[2rem]">
        <h1 className='text-white'>{props.data}</h1>
      </div>
    </div>
  )
}

export default DCard
