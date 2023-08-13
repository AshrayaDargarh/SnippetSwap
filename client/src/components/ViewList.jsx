import React, { useEffect, useState } from 'react'
import View from './View'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ViewList = () => {
    const [snippets,setSnippets]=useState([])
    useEffect(()=>{
        getSnippets()
    },[])
    async function getSnippets()
    {
        try {
        const token=localStorage.getItem('token')
        const res=await axios.get('http://localhost:3001/view',{headers:{'Authorization':`Bearer ${token}`}})
            setSnippets(res.data)
        } 
        catch (error) {
            console.log(error.response)
        }
    }
    console.log(snippets)
  return (
    <div className='flex justify-center m-5 flex-wrap' >
        {snippets.length===0?<div>No snippet available</div>:snippets.map((snippet)=>{return <Link to={'/viewupdate/'+snippet._id} key={snippet._id}><View key={snippet._id} {...snippet}/> </Link> })}
    </div>
  )
}

export default ViewList