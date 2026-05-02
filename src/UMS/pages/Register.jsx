import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function Register() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    age: '',
    phone: '',
    address: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/api/auth/register', formData)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        navigate('/users')
      })
      .catch(err => {
        setError(err.response?.data?.message || 'Registration failed')
      })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-2xl w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Register</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
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
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Age"
            className="w-full p-2 border rounded"
            onChange={(e) => setFormData({...formData, age: e.target.value})}
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700">
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
