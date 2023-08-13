import React, { useState } from 'react'
import View from './View'
import { Link } from 'react-router-dom'

const snippetData=[
    {
        id:1,
        title:'Title1',
        data:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam libero omnis repudiandae quos. Nesciunt fugiat, voluptatem iusto illum et ut ipsum incidunt nemo aliquid at, dignissimos quam a nostrum magni?'
    },
    {
        id:2,
        title:'Title2',
        data:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam libero omnis repudiandae quos. Nesciunt fugiat, voluptatem iusto illum et ut ipsum incidunt nemo aliquid at, dignissimos quam a nostrum magni?'
    },
    {
        id:3,
        title:'Title3',
        data:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam libero omnis repudiandae quos. Nesciunt fugiat, voluptatem iusto illum et ut ipsum incidunt nemo aliquid at, dignissimos quam a nostrum magni?'
    },
    {
        id:4,
        title:'Title4',
        data:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam libero omnis repudiandae quos. Nesciunt fugiat, voluptatem iusto illum et ut ipsum incidunt nemo aliquid at, dignissimos quam a nostrum magni?'
    },
]

const ViewList = () => {
    const [snippets,setSnippets]=useState(snippetData)
    console.log(snippets)
  return (
    <div className='flex justify-center m-5 ' >
        {snippets.length===0?<div>No snippet available</div>:snippets.map((snippet)=>{return <Link to={'/viewupdate/'+snippet.id} key={snippet.id}><View key={snippet.id} {...snippet}/> </Link> })}
    </div>
  )
}

export default ViewList