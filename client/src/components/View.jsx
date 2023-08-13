import React from 'react'

const View = ({title,data}) => {
 
  return (
    <div className='bg-slate-500 w-80 h-56 mx-5 px-3 rounded-md'>
      <div className='pt-2 '>
        <p>{title}</p>
      </div>
      <div className='pt-5 w-52'>
        <p>{data.substring(0, 70)}...</p>
      </div>
      <div className='float-right pt-14'>
        <button>View/Edit</button>
      </div>
    </div>
  )
}

export default View