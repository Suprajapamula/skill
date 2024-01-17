import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const[user,setUser]=useState("");
  //function handle(e){
  //   setUser(e.target.value)
  //}
  const handle=e=>{setUser(e.target.value)}
  return (
    <div>
      <center>
        <input type="text" placeholder='Username' value={user} name='user' onChange={handle}/>
        <h1>{user}</h1>
      </center>
    </div>
  );
}

export default App;
