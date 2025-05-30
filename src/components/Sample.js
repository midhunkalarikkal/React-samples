import React from 'react'
import { useParams } from 'react-router-dom'

const Sample = () => {
    const {id} = useParams();
    console.log("id : ",id);
  return (
    <div>Sample id : {id}</div>
  )
}

export default Sample