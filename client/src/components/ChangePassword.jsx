import React, { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

const ChangePassword = ({id}) => {
  const [password, setPassword]=useState({})
  const[isValid,setIsValid]=useState(null)
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
    try{
      const token=localStorage.getItem('token')
      const res=await axios.patch(`http://localhost:3001/user/${id}`,password,{headers:{Authorization:`Bearer ${token}`}})
      console.log(res.data)
      setIsValid(true)
      setTimeout(()=>{
        setIsValid(false)
      },2000)
    }catch(error)
    {
      console.log(error.response)
    }
  }
  return (
   
        <form onSubmit={handleSubmit}>
          <div className='mt-3'>
              <label htmlFor="password" className="block text-sm">
                New Password
              </label>
              <input type="password" name="password" id="password" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required/>
            </div>
            {isValid===true && <span className='text-xs text-green-500'>Password updated successfully.</span>}
          <div className="mt-4 flex flex-col items-center justify-center">
            <button className="bg-sky-700 px-20 py-1 rounded-lg">Change Password</button>
          </div>
        </form>
  )
}

export default ChangePassword