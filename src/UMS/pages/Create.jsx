import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    age: '',
    phone: '',
    address: ''
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    axios.post('http://localhost:4000/api/users', formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        navigate('/users')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Create New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({...formData, full_name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <input
          type="number"
          placeholder="Age"
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({...formData, age: e.target.value})}
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
        <textarea
          placeholder="Address"
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({...formData, address: e.target.value})}
        ></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
          Create User
        </button>
      </form>
    </div>
  )
}

export default Create
