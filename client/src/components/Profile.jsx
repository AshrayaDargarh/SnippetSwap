import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Profile = () => {

   const [user,setUser]=useState({})
   const [logo,setLogo]=useState('')
    useEffect(()=>{
        getUser()
    },[])
    async function getUser()
    {
        try {
        const token=localStorage.getItem('token')
        const res=await axios.get('http://localhost:3001/user',{headers:{'Authorization':`Bearer ${token}`}})
            setUser(res.data)
            setLogo(res.data.firstName[0])
            console.log('user=',res.data)
        } 
        catch (error) {
            console.log(error.response)
        }
    }
  return (
    <div className='flex flex-col justify-center items-center mt-20 '>
      <div className='w-20 bg-blue-400 h-20 rounded-full flex justify-center items-center'>
      <p className='text-4xl font-extrabold'> {logo}</p>
      </div>
      <div className='mt-6 text-2xl font-bold'>
        <p>Welcome, {user.firstName+ ' ' +user.lastName}</p>
      </div>
      
    </div>
  )
}

export default Profile