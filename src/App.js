import axios from 'axios';
import React from 'react'
import { useState } from 'react'

function App() {
  const[city,setCity]=useState("");
  const [res,setRes]=useState("");
  const handleChange=e=>{
      setCity(e.target.value);
  }
  const handleSubmit=e=>{
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then((res)=>{
      setRes(`Temperature at ${city} is`+" "+Math.round(res.data.main.temp-273.15))
      setCity("")
    })

  }
  return (
    <div >
      <center>
        <div style={{boxShadow:"10px 10px 20px 0px rgba(0, 0, 0, 0.5)", margin:"100px", marginTop:"100px"}}>
          <h1>Weather Application</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={city}/><br/>
            <input type="submit" value="Get Temperature" style={{backgroundColor:"lightblue"}}/>
          </form>
          <h1>{res}</h1>
        </div>
      </center>
    </div>
  )
}

export default App
