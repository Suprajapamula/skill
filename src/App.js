
import './App.css';
import React,{useEffect, useState} from 'react'

function App(){
   const[data,setData]=useState([])
      useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json().then((res)=>{
        setData(res)
      }))},[])
 return(
  <div>
    <center>
         <h1>Data</h1>
    </center>
         <ul>
         {
          data.map((item)=>{
            return <li key={item.id}>{item.title}</li>
          })
         }
         {console.log(data)}
         </ul>
  </div>
 )  
}

export default App;
