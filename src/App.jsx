import React from 'react'
import { Routes, Route } from 'react-router-dom'
import View from './UMS/pages/View'
import Layout from './Layouts/UMSLayout'
import Create from './UMS/pages/Create'
import Dashboard from './UMS/pages/Dashboard'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/users' element={<View/>} />
          <Route path='/create' element={<Create/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
