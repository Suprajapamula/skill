import React, { useState } from 'react';
import Cities from './cities.json'
function App() {
  const[search,setSearch]=useState("");
  return (
    <div>
      <center>
      <h1>search your city in Telangana</h1>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {
        Cities.filter((city)=>city.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((city)=>{
           return <div style={{border:"1px solid black", margin:"10px", padding:"10px", maxWidth:"70%"}}>{city.name}</div>
        })
      }
      </center>
    </div>
  )
}

export default App