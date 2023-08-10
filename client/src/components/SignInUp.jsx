import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const SignInUp = () => {
    const [toggle,setToggle]=useState(true)
  return (
    <div>
        <div>
            <button onClick={()=>setToggle(true)}>Sign Up</button>
            <button onClick={()=>setToggle(false)}>Log In</button>
        </div>
        {toggle?<Register/>:<Login/>}
    </div>
  )
}

export default SignInUp