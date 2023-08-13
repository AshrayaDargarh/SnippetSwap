import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Profile = () => {

   const [user,setUser]=useState([])
    useEffect(()=>{
        getUser()
    },[])
    async function getUser()
    {
        try {
        const token=localStorage.getItem('token')
        console.log(token)
        const res=await axios.get('http://localhost:3001/user',{headers:{'Authorization':`Bearer ${token}`}})
            setUser(res.data)
            console.log('user=',res.data)
        } 
        catch (error) {
            console.log(error.response)
        }
    }
  return (
    <div>
      Profile:
    </div>
  )
}

export default Profile