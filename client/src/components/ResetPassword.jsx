import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ResetPassword = () => {
  const [password, setPassword]=useState({})
  const[isValid,setIsValid]=useState(null)
  const {resetToken}=useParams()
  function handleChange(e)
  {
    setPassword({
      ...password,
      [e.target.name]:e.target.value
    })
  }
  async function handleSubmit(e)
  {
    e.preventDefault()
    try {
      const res=await axios.post(`http://localhost:3001/auth/reset-password/${resetToken}`,password,{withCredentials:true})
      setIsValid(true)
      console.log(res.data)
    } catch (error) {
      console.log(error.response)
      if(error.response)
      {
        const {status,data}=error.response
        if(status===400 && data.message ==="Invalid or expired token")
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
          <p className='text-xl'>Reset your password</p>
          <div className='mt-3'>
              <label htmlFor="password" className="block text-sm">
                New Password
              </label>
              <input type="password" placeholder="• • • • • • • • " name="password" id="password" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
            </div>
            {isValid===true && <span className='text-xs text-green-500'>Password updated successfully.</span>}
            {isValid===false && <span className='text-xs text-red-500'>Link is expired please reset password again.</span>}
          <div className="mt-4 flex flex-col items-center justify-center">
            <button className="bg-sky-700 px-20 py-1 rounded-lg">Change Password</button>
          </div>
         
        </form>
      </div>
    </div>
  </div>
  )
}

export default ResetPassword