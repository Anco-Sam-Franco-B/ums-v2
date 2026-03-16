import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserForm from './Pages/UserForm'
import ViewUsers from './Pages/ViewUsers'
import NavBar from './components/NavBar'
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <div className='bg-gradient-to-br from-10% from-black  via-zinc-900 to-gray-950   text-gray-400 p-2  w-full h-screen'>
      <BrowserRouter>
        <NavBar/>
        <div className="">
          <Routes>
          <Route path='/create' element={<UserForm/>} />
          <Route path='/users' element={<ViewUsers/>} />
            <Route path='/' element={<Home/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
