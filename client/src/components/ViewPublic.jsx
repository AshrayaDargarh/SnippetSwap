import axios from 'axios'
import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const initialValue={
    title:'',
    data:'',
    daysToExpire:0,
    userName:''
}
const ViewPublic = () => {
    const [snippet,setSnippet]=useState(initialValue)
    const [time,setTime]=useState()
    const {viewId}=useParams()
    async function getView()
    {
        try {
            const res=await axios.get(`http://localhost:3001/public/${viewId}`)
            console.log(res)
            setSnippet(res.data)
            const inputDate = new Date(res.data.intendedExpireAt);
            const currentDate = new Date();
            const timeDifferenceMillis = inputDate - currentDate;
            const daysDifference = Math.floor(timeDifferenceMillis / (60 * 60 * 1000));
            setTime(daysDifference)
        } 
        catch (error) {
            console.log(error.response)
        }
    }
    useEffect(()=>{
        getView()
    },[])
    const currentUrl = window.location.host;
    
  return (
    <div className='bg-slate-900 text-white h-screen'>
    <div className='bg-slate-900 text-white '>
      <form >
      <div className='flex justify-center flex-wrap pt-8'>
        <div className='m-5 '>
          <label htmlFor='data' className='block pb-3' ><span className='text-2xl font-semibold'>Your code is here:</span></label>
          <textarea name="data" value={snippet.data} readOnly  className='bg-slate-900 border p-2 border-slate-600 rounded-md lg:w-[60rem] sm:w-[40rem]' id="data" rows="30" cols="30" ></textarea>
        </div>
        
        <div className='m-5 '>
        <div className='mt-5 mr-20'>
              <label htmlFor="title" className="block text-sm">
                Snippet title:
              </label>
              <input type="text" value={snippet.title} readOnly placeholder='Enter title' name="title" id="title" className='bg-slate-900 border w-[28rem] border-slate-600 p-2 mt-2 py-1 rounded-md' />
        </div>
        <div className='mt-5 mr-20'>
           <label htmlFor="daysToExpire" className="block text-sm">
                Expire after:
              </label>
              <input type="text" value={time + ' Hours left'} readOnly  placeholder='Expires after (days)' name="daysToExpire" id="daysToExpire" className='bg-slate-900 border w-[28rem] border-slate-600 p-2 mt-2 py-1 rounded-md' required/>
        </div>
        <div className='mt-5 mr-20'>
           <label htmlFor="user" className="block text-sm">
                Created By:
              </label>
              <input type="text" value={snippet.userName} readOnly  placeholder='Expires after (days)' name="daysToExpire" id="daysToExpire" className='bg-slate-900 border w-[28rem] border-slate-600 p-2 mt-2 py-1 rounded-md' required/>
        </div>
        <div className='mt-5 mr-20'>
           <label htmlFor="share" className="block text-sm">
               Share the link:
              </label>
              <input type="text" value={`http://${currentUrl}/public/${viewId}`} readOnly  placeholder='Expires after (days)' name="share" id="share" className='bg-slate-900 border w-[28rem] border-slate-600 p-2 mt-2 py-1 rounded-md' required/>
              <button className='px-4' type='button' onClick={() =>  navigator.clipboard.writeText(`http://${currentUrl}/public/${viewId}`)}>Copy</button>
        </div>
        </div>
      </div>
        </form>
    </div>
    </div>
  )
}

export default ViewPublic