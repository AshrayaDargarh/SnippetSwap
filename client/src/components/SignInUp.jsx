import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const SignInUp = () => {
    // const [toggle,setToggle]=useState(true)
  return (
    <div>
      <div className='container'>
        <form>
          <h3>Sign in to your account</h3>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' id='email' />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input type="password" name='password' id='password' />
          </div>
          <div>
            <a href="#">Forgot password</a>
          </div>
          <div>
            <Button>Sign In</Button>
            <span>Don't have an account yet? <a href="#">Sign up</a></span>
          </div>
        </form>

      </div>
    </div>
    // <div>
    //     <div>
    //         <button onClick={()=>setToggle(true)}>Sign Up</button>
    //         <button onClick={()=>setToggle(false)}>Log In</button>
    //     </div>
    //     {toggle?<Register/>:<Login/>}
    // </div>
  )
}

export default SignInUp