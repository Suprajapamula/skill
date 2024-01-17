import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[data,setData]=useState({
      username:"",
      email:"",
      password:"",
      confirmPassword:"",
  })
  function handleChange(e){
    setData({...data,[e.target.name]:e.target.value})
  }
  // const handleSubmit=e=>{
  //   e.preventDefault()
  //   console.log(data)
  // }
  function handleSubmit(e){
    e.preventDefault();
    if(password===confirmPassword){
      console.log(data)
    }
    else{
      console.log("Passwords are not matched");
    }
  }
  const{username,email,password,confirmPassword}=data;
  return(
    <div>
      <form onSubmit={handleSubmit}>
      <center>
          <input type="text" name="username" value={username} placeholder='username' onChange={handleChange}></input><br/>
          <input type="email" name="email" value={email} placeholder='email' onChange={handleChange}></input><br/>
          <input type="password" name="password" value={password} placeholder='password' onChange={handleChange}></input><br/>
          <input type="password" name="confirmPassword" value={confirmPassword} placeholder='confirm password' onChange={handleChange}></input><br/>
          <button type='submit'>submit</button>
      </center>
      </form>
    </div>
  )
  
}

export default App;
