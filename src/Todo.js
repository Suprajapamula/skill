import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Todo() {
  const userData=useParams();
  const[details,setDetails]=useState(null)
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos/${userData.name}`).then((res)=>{
        console.log(res);
        setDetails(res.data)
    })
},[])
  return (
    <div>
        <h1> Individula Todo Data</h1>
        {
          //console.log(details)
          details && <div style={{border:"1px solid black"}}>
                     <center>
                      <h4>ID:{details.id}</h4>
                      <h4>Title:{details.title}</h4>
                      <h4>UserID:{details.userId}</h4>
                      </center>
                    </div>
        }
    </div>
  )
}

export default Todo