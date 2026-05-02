import React from 'react'

function Title(props) {
  return (
    <div className="flex w-full px-2 pt-2 items-center justify-between">
            <h1 data-aos-delay="500" data-aos="fade-right" className='text-sm p-2 text-white w-14 text-center font-medium bg-gradient-to-r from-blue-700 to-blue-500 shadow-md rounded-full'>Users</h1>
            <button onClick={()=>props.func()} data-aos-delay="700" data-aos="fade-left" className='cursor-pointer text-sm p-2 px-5 hover:opacity-85 active:scale-90 transition-all delay-75 text-white text-center font-medium bg-gradient-to-r from-blue-700 to-blue-500 shadow-md rounded-full'>Refresh</button>
    </div>
  )
}

export default Title
