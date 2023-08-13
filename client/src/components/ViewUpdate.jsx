import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import useView from '../utils/useView'
import axios from 'axios'

const initialValue={
    title:'',
    data:'',
    daysToExpire:0
}
const token=localStorage.getItem('token')

const ViewUpdate = () => {
    const {viewId}=useParams()
    const [snippet,setSnippet]= useState(initialValue)
    const navigate=useNavigate()
    async function getSnippet()
    {
        try{
            const res = await axios.get(`http://localhost:3001/view/${viewId}`,{headers: { Authorization: `Bearer ${token}`}});
            console.log(res)
            setSnippet(res.data)
        }
        catch(error)
        {
            console.log(error.response)
        }
    }
    useEffect(()=>{
        getSnippet()
    },[])
    function handleChange(e)
    {
      setSnippet({
        ...snippet,
        [e.target.name]:e.target.value
      })
    }

    async function handleUpdate(e)
    {
        e.preventDefault()
        try {
            const res=await axios.patch(`http://localhost:3001/view/${viewId}`,snippet,{headers:{Authorization:`Bearer ${token}`}})
            console.log(res)
        } catch (error) {
            console.log(error.response)
        }
    }
    async function handleDelete(e)
    {
        e.preventDefault()
        try {
            if(window.confirm('Do you really want to delete this?'))
            {
                const res=await axios.delete(`http://localhost:3001/view/${viewId}`,{headers:{Authorization:`Bearer ${token}`}})
                console.log(res)
                navigate('/view')    
            }
            
        } catch (error) {
            console.log(error.response)
        }
    }
    const currentUrl = window.location.host;
  return (
    <div>
    <div>View Id:{viewId}</div>
    <div>
      <form onSubmit={handleUpdate}>
      <div className='flex justify-center md:flex-nowrap flex-wrap'>
        <div className='m-5'>
          <label htmlFor='data' className='block pb-3' ><span className='text-2xl font-semibold'>Paste your code here:</span></label>
          <textarea name="data" value={snippet.data}  className='bg-slate-900 border border-slate-600 rounded-md w-[80rem]' id="data" rows="30" onChange={handleChange}  ></textarea>
        </div>
        
        <div className='m-5 '>
        <div className='mt-5 mr-20'>
              <label htmlFor="title" className="block text-sm">
                Enter the snippet title:
              </label>
              <input type="text" value={snippet.title} placeholder='Enter title' name="title" id="title" className='bg-slate-900 border w-72 border-slate-600 px-2 mt-2 py-1 rounded-md' onChange={handleChange}  />
        </div>
        <div className='mt-5 mr-20'>
              <label htmlFor="daysToExpire" className="block text-sm">
                Expire after days:
              </label>
              <input type="number" defaultValue='0'  min="1"  onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} placeholder='Expires after (days)' name="daysToExpire" id="daysToExpire" className='bg-slate-900 border w-72 border-slate-600 px-2 mt-2 py-1 rounded-md ' onChange={handleChange} required />
              
        </div>
        <p type="text" value={`http://${currentUrl}/public/${viewId}`} >{`http://${currentUrl}/public/${viewId}`}</p><br/>
        <button className='bg-sky-600 p-2 rounded-md mt-3 mx-2' >Update Snippet</button>
        <button className='bg-sky-600 p-2 rounded-md mt-3' type='button' onClick={handleDelete}>Delete Snippet</button>
        </div>
      </div>
        </form>
    </div>

    </div>
  )
}

export default ViewUpdate