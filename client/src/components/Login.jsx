import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
            <fieldset>
                <legend>Login</legend>
                <div className='p-3'>
                <label className='px-3' htmlFor="email">Email</label>
                <input className='py-1' type="text" id='email' name='email' placeholder='Enter your email' required />
                </div>
                <div>
                    <label className='px-3' htmlFor="password">Password</label>
                    <input className='py-1' type="password" id='password' name='password' placeholder='Enter your password' required/>
                </div>
                <button className='bg-slate-700 px-2 py-1 mt-5 rounded-md'>Login</button>
            </fieldset>
            
        </form>
    </div>
  )
}

export default Login