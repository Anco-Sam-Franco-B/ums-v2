import React, { useState, useEffect } from 'react'
import DCard from '../components/DCard'
import axios from 'axios'
import { io } from "socket.io-client"

const socket = io("http://localhost:4000")

function Dashboard() {
  const [stats, setStats] = useState({ total: 0, online: 0, offline: 0 })

  const fetchStats = () => {
    const token = localStorage.getItem("token")
    axios.get('http://localhost:4000/api/users/stats', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setStats(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchStats()

    socket.on("statsUpdated", (newStats) => {
      setStats(newStats)
    })

    return () => {
      socket.off("statsUpdated")
    }
  }, [])

  return (
    <div className='w-full h-full overflow-hidden'>
      <div className="w-full flex gap-2 p-2">
            <DCard title='Users' data={stats.total} />
            <DCard title='Online' data={stats.online} />
            <DCard title='Offline' data={stats.offline} />
      </div>
    </div>
  )
}

export default Dashboard
