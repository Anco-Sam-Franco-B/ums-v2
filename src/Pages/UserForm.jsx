import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";


function UserForm() {
    const [formData, setFormData]=useState({
            fname: '',
            email: '',
            age: '',
            isActive: false
    })
    const navigate = useNavigate();
    const SubmitAccount=(event)=>{
            event.preventDefault()
            axios.post('http://localhost:4000/create-user', formData)
            .then(res=>{
                alert(res.data.message)
                navigate('/users')
            })
            .catch(err=>{
                console.log(err)
                alert("Failed to creat new user!")
            })

            setFormData({
                    fname: '',
                    email: '',
                    age: '',
                    isActive: false
            })
    }
    useEffect(()=>{
        document.title = "Create User Page"
    })
  return (
    <div>
      <div className="w-full flex flex-col p-24 gap-3">
            <h1 className='text-5xl  bg-gradient-to-br from-10% from-black  via-green-900 to-gray-950  bg-clip-text text-transparent text-center font-bold'>User Form</h1>
            <div className=" flex flex-col gap-2">
                <input type="text" className='border-none outline-none shadow-xl shadow-zinc-800  rounded-md  bg-gradient-to-br from-10% from-black  via-zinc-900 to-gray-950   text-gray-400 p-2 px-5' value={formData.fname} onChange={e=>setFormData({...formData, fname: e.target.value})} name='fullname' placeholder='Fullname' />
                <input type="email" className='border-none outline-none shadow-xl shadow-zinc-800  rounded-md  bg-gradient-to-br from-10% from-black  via-zinc-900 to-gray-950   text-gray-400 p-2 px-5' value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} name='email' placeholder='Email Address' />
                <input type="number" className='border-none outline-none shadow-xl shadow-zinc-800  rounded-md  bg-gradient-to-br from-10% from-black  via-zinc-900 to-gray-950   text-gray-400 p-2 px-5' value={formData.age} onChange={e=>setFormData({...formData, age: e.target.value})} name='age' placeholder='Age' />
                <select className='border-none outline-none shadow-xl shadow-zinc-800  rounded-md  bg-gradient-to-br from-10% from-black  via-zinc-900 to-gray-950   text-gray-400 p-2 px-5' value={formData.isActive} onChange={e=>setFormData({...formData, isActive: e.target.value})} name="isActive">
                    <option value="">Select status</option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
                <button onClick={SubmitAccount} className='border-none outline-none shadow-xl shadow-zinc-800  rounded-md  bg-gradient-to-br from-10% from-black  via-green-900 to-gray-950   text-gray-400 p-2'>Sumbit Account</button>
            </div>
        </div>
    </div>
  )
}

export default UserForm
