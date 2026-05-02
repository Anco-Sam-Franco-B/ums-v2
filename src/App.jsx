import React from 'react'
import { Routes, Route } from 'react-router-dom'
import View from './UMS/pages/View'
import Layout from './Layouts/UMSLayout'
import Create from './UMS/pages/Create'
import Dashboard from './UMS/pages/Dashboard'
import Login from './UMS/pages/Login'
import Register from './UMS/pages/Register'
import ProtectedRoute from './UMS/components/ProtectedRoute'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 200,
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true
    })
    AOS.refreshHard();
  }, [])

  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          <Route path='/users' element={<ProtectedRoute><View/></ProtectedRoute>} />
          <Route path='/create' element={<ProtectedRoute><Create/></ProtectedRoute>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
