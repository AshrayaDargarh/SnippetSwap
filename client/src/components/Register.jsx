import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const [user,setUser]=useState({})
  const[isValid,setIsValid]=useState(true)

  const navigate=useNavigate()
  function handleChange(e)
  {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  async function handleSubmit(e)
  {
    e.preventDefault()
    try
    {
      const res=await axios.post('http://localhost:3001/auth/signUp',user,{withCredentials:true})
      setIsValid(true)
      if(res.status===201)
      {
        navigate('/login')
      }
    }catch(error)
    {
      if(error.response)
      {
        const {status}=error.response
        if(status===401)
        {
          setIsValid(false)
        }
      }
    }
  }
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="bg-slate-800 drop-shadow-2xl rounded-md p-10 flex">
          <form onSubmit={handleSubmit}>
            <p className='text-xl'>Create your account</p>
            <div className='mt-5'>
              <label htmlFor="userName" className="block text-sm">
                User Name
              </label>
              <input type="text" placeholder='Enter user name' name="userName" id="userName" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
            </div>
            <div className='mt-5'>
              <label htmlFor="firstName" className="block text-sm">
                First Name
              </label>
              <input type="text" placeholder='Enter your first name' name="firstName" id="firstName" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange}  required/>
            </div>
            <div className='mt-5'>
              <label htmlFor="lastName" className="block text-sm">
                Last Name
              </label>
              <input type="text" placeholder='Enter your last name' name="lastName" id="lastName" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
            </div>
            <div className='mt-5'>
              <label htmlFor="email" className="block text-sm">
                Your email
              </label>
              <input type="text" placeholder='name@company.com' name="email" id="email" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
            </div>
            <div className='mt-3'>
              <label htmlFor="password" className="block text-sm">
                Password
              </label>
              <input type="password" placeholder="• • • • • • • • "name="password" id="password" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
            </div>
            <div className='mt-2'>
              <span className='text-xs text-red-500'>{isValid?'':'Please enter the valid Credentials.'}</span>
            </div>
            <div className='mt-3 text-sm'>
              <Link to='/forgotpassword' className='text-blue-500'>Forgot password</Link>
            </div>
            <div className="mt-3 flex flex-col items-center justify-center">
              <button className="bg-sky-700 px-20 py-1 rounded-lg">Sign up</button>
            </div>
            <p className='mt-4 text-sm'>
               Already have an account? <Link to="/login" className='text-blue-500'>Sign in</Link>
              </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register