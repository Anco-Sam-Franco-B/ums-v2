import React from 'react'
import DCard from '../components/DCard'

function Dashboard() {
  return (
    <div className='w-full h-full overflow-hidden'>
      <div className="w-full flex gap-2 p-2">
            <DCard title='Users' data={23} />
            <DCard title='Online' data={10} />
            <DCard title='Offline' data={13} />
      </div>
    </div>
  )
}

export default Dashboard
