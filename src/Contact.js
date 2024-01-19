import React from 'react'
import { useParams } from 'react-router-dom'
function Contact() {
    var dataFromContactPath=useParams()
  return (
    <div>
        <h1>Contact name is:{dataFromContactPath.name}</h1>
        {console.log(dataFromContactPath)}
    </div>
  )
}

export default Contact