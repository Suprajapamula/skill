import axios from 'axios';
import React, { useState } from 'react'
import Gallery from './Gallery';

function App() {
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const [search,setSearch]=useState("");
  const [data,setData]=useState([])
  const handleChange=e=>{
    setSearch(e.target.value);
  }
  const handleSubmit=e=>{
    e.preventDefault()
    //console.log(search)
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then((res)=>{
      setData(res.data.photos.photo)
    })
  }
  return (
    <div>
       <center>
         <form onSubmit={handleSubmit}>
            <h1>Gallery snapshorts</h1>
            <input type="text" placeholder='search' value={search} onChange={handleChange}/><br/>
           <input type="submit"/>
         </form><br/>
         {
          data.length>0?<Gallery data={data}/>:<h1>No data is loaded</h1>
         }
      </center>
    </div>
  )
}

export default App
