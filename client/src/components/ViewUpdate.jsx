import React from 'react'
import { useParams } from 'react-router-dom'

const ViewUpdate = () => {
    const {viewId}=useParams()
  return (
    <div>
        ViewUpdate
    <div>View Id:{viewId}</div>
    </div>
  )
}

export default ViewUpdate