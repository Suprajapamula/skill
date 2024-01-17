import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[data,setData]=useState({
    username:'',
    password:'',
  })
  let {username,password}=data;
  function handleOnChnage(e){
    setData({...data,[e.target.name]:e.target.value})
  }
  function handleOnSubmit(e){
    e.preventDefault();
    console.log(data)
  }
  return (
    
    <div>
      <form onSubmit={handleOnSubmit}>
        <center>
          <input type="text" placeholder='username' value={username} name="username" onChange={handleOnChnage}></input><br/>
          <input type="password" placeholder='password' value={password} name="password" onChange={handleOnChnage}></input><br/>
          <input type="submit"></input>
        </center> 
      </form>
    </div>
  );
}

export default App;
