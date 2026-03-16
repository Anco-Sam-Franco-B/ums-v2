import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-full flex items-center justify-around p-2'>
      <h1 className='text-4xl font-bold bg-gradient-to-br from-10% from-black  via-green-700 to-gray-950  bg-clip-text text-transparent '>UMS</h1>
      <nav className='flex items-center gap-3'>
          <Link className='p-2 hover:bg-gradient-to-br hover:from-10% hover:from-black  hover:via-blue-600 hover:to-gray-950  hover:bg-clip-text hover:text-transparent font-medium bg-gradient-to-br from-10% from-black  via-green-600 to-gray-950  bg-clip-text text-transparent rounded-md' to='/'>Home</Link>
        <Link className='p-2 hover:bg-gradient-to-br hover:from-10% hover:from-black  hover:via-blue-600 hover:to-gray-950  hover:bg-clip-text hover:text-transparent font-medium bg-gradient-to-br from-10% from-black  via-green-600 to-gray-950  bg-clip-text text-transparent rounded-md' to='/create'>Create User</Link>
        <Link className='p-2 hover:bg-gradient-to-br hover:from-10% hover:from-black  hover:via-blue-600 hover:to-gray-950  hover:bg-clip-text hover:text-transparent font-medium bg-gradient-to-br from-10% from-black  via-green-600 to-gray-950  bg-clip-text text-transparent rounded-md' to='/users'>View Users</Link>
      </nav>
    </div>
  )
}

export default NavBar
