import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'

function App(){
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
        setData(res.data)//No need for converting the response into JSON format
    })
  },[])
 return(
     <div>
      <center>
        <h1>Data</h1>
        {console.log(data)}
        <ul>
        {
          data.map((item)=>{
            return <li key={item.id}>{item.title}</li>
          })
        }
        </ul>
      </center>
     </div>
 )  
}

export default App;
