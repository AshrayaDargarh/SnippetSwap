import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ResetPassword = () => {
  const {resetToken}=useParams()

  return (
    <div>
    <div className="flex justify-center mt-10">
      <div className="bg-slate-800 drop-shadow-2xl rounded-md p-10 flex">
        <form className="">
          <p className='text-xl'>Reset your password</p>
          <div className='mt-3'>
              <label htmlFor="password" className="block text-sm">
                New Password
              </label>
              <input type="password" placeholder="• • • • • • • • " name="password" id="password" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' required/>
            </div>
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