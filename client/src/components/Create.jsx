import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"
const Create = () => {
  const [snippet,setSnippet]=useState({})
  const navigate=useNavigate()
  function handleChange(e)
  {
    setSnippet({
      ...snippet,
      [e.target.name]:e.target.value
    })
  }
  async function handleSubmit(e)
  {
    e.preventDefault()
    try
    {
      const token=localStorage.getItem('token')
      const res=await axios.post('http://localhost:3001/view',snippet,{headers:{Authorization:`Bearer ${token}`}})
      if(res)
      {
        window.alert("Snippet Created Successfully.")
        navigate('/view')
      }
    }catch(err)
    {
      console.log(err.response)
    }
  }
  return (
    <div>
{/* import { Link,useNavigate } from 'react-router-dom'; */}

     
      <form onSubmit={handleSubmit}>
      <div className='flex justify-center md:flex-nowrap flex-wrap'>
        <div className='m-5'>
          <label htmlFor='data' className='block pb-3' ><span className='text-2xl font-semibold'>Paste your code here:</span></label>
          <textarea name="data" className='bg-slate-900 border border-slate-600 rounded-md w-[80rem]' id="data" rows="30" onChange={handleChange} required ></textarea>
        </div>
        
        <div className='m-5 '>
        <div className='mt-5 mr-20'>
              <label htmlFor="title" className="block text-sm">
                Enter the snippet title:
              </label>
              <input type="text" placeholder='Enter title' name="title" id="title" className='bg-slate-900 border w-72 border-slate-600 px-2 mt-2 py-1 rounded-md' onChange={handleChange} required />
        </div>
        <div className='mt-5 mr-20'>
              <label htmlFor="daysToExpire" className="block text-sm">
                Expire after days:
              </label>
              <input type="number" min="1"  onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} placeholder='Expires after (days)' name="daysToExpire" id="daysToExpire" className='bg-slate-900 border w-72 border-slate-600 px-2 mt-2 py-1 rounded-md ' onChange={handleChange} required />
              
        </div>
        <button className='bg-sky-600 p-2 rounded-md mt-3'>Publish Snippet</button>
        </div>
      </div>
        </form>
    </div>
  )
}

export default Create