import React, { useState } from 'react'
import axios from 'axios'
const ForgotPassword = () => {
  const [email,setEmail]=useState({})
  const[isValid,setIsValid]=useState(null)

  function handleChange(e)
  {
    setEmail({
      ...email,
      [e.target.name]:e.target.value
    })
  }
  async function handleSubmit(e)
  {
    e.preventDefault()
    try
    {
      const res=await axios.post('http://localhost:3001/auth/forgot-password',email,{withCredentials:true})
      setIsValid(true)

    }
    catch(err)
    {
      if(err.response)
      {
        const {status}=err.response
        if(status===400)
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
            <p className='text-xl'>Forgot your password?</p>
            <div className='mt-5'>
              <label htmlFor="email" className="block text-sm">
                Enter your email
              </label>
              <input type="text" placeholder='name@company.com' name="email" id="email" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' onChange={handleChange} required />
            </div>
            <div>
            {/* {isValid?<span className='text-xs text-green-500'>Please check your mail</span>:<span className='text-xs text-red-500'>Email does not exist.</span>} */}
            {isValid===true  &&<span className='text-xs text-green-500'>Please check your mail</span>}
             {isValid===false&&<span className='text-xs text-red-500'>Email does not exist.</span>}
      
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
              <button className="bg-sky-700 px-20 py-1 rounded-lg">Submit</button>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword