import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="bg-slate-800 drop-shadow-2xl rounded-md p-10 flex">
          <form className="">
            <p className='text-xl'>Forgot your password?</p>
            <div className='mt-5'>
              <label htmlFor="email" className="block text-sm">
                Your email
              </label>
              <input type="text" placeholder='name@company.com' name="email" id="email" className='bg-gray-500 px-2 w-72 mt-2 py-1 rounded-lg' required />
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