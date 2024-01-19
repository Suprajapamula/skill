import React, { useState } from 'react'
import { Redirect } from 'react-router';
function Home() {
    const[auth,setAuth]=useState(false)
    if(auth===true){
        <Redirect to="/contact"></Redirect>
    }
  return (
    <div>
        <h3 className='content'> Welcome to Home </h3>
        <button onClick={()=>setAuth(true)}>Contact</button>
    </div>
  )
}

export default Home