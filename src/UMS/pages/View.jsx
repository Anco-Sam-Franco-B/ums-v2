import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ErrorAlter from '../components/ErrorAlter'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import ActionMenus from '../components/ActionMenus'
import { io } from "socket.io-client"

const socket = io("http://localhost:4000")

function View() {
  const [loading, setLoading]=useState(false)
  const [users, setUsers]=useState([])
  const [error, setError]=useState(null)
  
  const fetchUsers=()=>{
      setLoading(true)
      const token = localStorage.getItem("token")
      
    axios.get('http://localhost:4000/api/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res=>{
      setUsers(res.data)
      setError(null)
      setLoading(false)
    })
    .catch(err=>{
      setError(err)
      setLoading(false)
    })
  }

  const showNotification = (title, body) => {
    if (Notification.permission === "granted") {
      new Notification(title, { body, icon: "/vite.svg" })
    }
  }

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission()
    }
    
    fetchUsers()

    socket.on("userCreated", (newUser) => {
      setUsers((prev) => [newUser, ...prev])
      showNotification("User Created", `${newUser.full_name} has been added.`)
    })

    socket.on("userUpdated", (updatedUser) => {
      setUsers((prev) => prev.map((u) => u.id === updatedUser.id ? updatedUser : u))
      showNotification("User Updated", `${updatedUser.full_name}'s info was updated.`)
    })

    socket.on("userDeleted", (deletedId) => {
      setUsers((prev) => prev.filter((u) => u.id !== deletedId))
      showNotification("User Deleted", "A user was removed from the system.")
    })

    return () => {
      socket.off("userCreated")
      socket.off("userUpdated")
      socket.off("userDeleted")
    }
  }, [])


  if(error) return(
    <div className='w-full mt-10 flex items-center justify-center'>
        <ErrorAlter err={error} fun={fetchUsers} />
    </div>
  )
  return (
    <div className='w-full'>
      {
        loading ? (
          <>
            <div className="w-full flex items-center mt-10 justify-center">
              <div className="h-10  w-10 rounded-full border-4 animate-spin border-blue-300 border-l-blue-500"></div>
            </div>
          </>
        ) : (
          <div>
            <div className="w-full bg-white/80 p-1 rounded-md shadow-lg relative">
              <Title func={fetchUsers}/>
              <table className='w-full mt-3 mb-2 text-sm'>
                
                  <thead>
                    <tr className='border-b border-b-blue-500/45 uppercase text-blue-600'>
                        <th className='p-1'>id</th>
                        <th className='p-1'>Fullname</th>
                        <th className='p-1'>Email</th>
                        <th className='p-1'>Age</th>
                        <th className='p-1'>Status</th>
                        <th className='p-1'>Action</th>
                    </tr>
                  </thead>
                
                  {
                    users.map((data, index)=>(
                      <tbody key={index}>
                        <tr  className='border-b last:border-b- border-b-blue-500/45'>
                          <td className='p-1 text-center'>{index + 1}.</td>
                          <td className='p-1'>{data.full_name}</td>
                          <td className='p-1'>{data.email}</td>
                          <td className={`p-1 text-center ${data.age>=18?"": "underline text-red-500"}`}>{data.age}</td>
                          <td className='p-1 flex items-center justify-center'>
                            {data.is_active ? (
                              <div className="p-1 bg-green-400/20 border border-green-500/40 font-medium text-xs rounded-full w-14 text-center text-green-600 shadow-lg">Online</div>
                            ): (
                              <div className="p-1 bg-red-400/20 border border-red-500/40 font-medium text-xs rounded-full w-14 text-center text-red-600 shadow-lg">Offline</div>
                            )}
                          </td>
                          <td className='p-1 relative'>
                            
                            <ActionMenus userid={data.id} keys={index}/>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  }
              </table>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default View
