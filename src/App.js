import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'

function App(){
  const[data,setData]=useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const{username,email,password,confirmPassword}=data;
  const haandleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("https://sampleproject1-924bf-default-rtdb.firebaseio.com/register.json",data).then(()=>alert("sucessfully submited the data to DB"))
    //get the data by using axios.get method or fetch methods
 }
//  const handleSubmit = (e) => {
//   e.preventDefault();

//   axios.post("https://sampleproject1-924bf-default-rtdb.firebaseio.com/register.json", data)
//     .then(() => alert("Successfully submitted the data to DB"))
//     .catch(error => alert("Error submitting data to DB: " + error.message));
// }

 return(
     <div>
      <center>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} placeholder='username' name="username" onChange={haandleChange}/><br/>
          <input type="email" value={email} placeholder='email' name="email" onChange={haandleChange}/><br/>
          <input type="password" value={password} placeholder='password' name="password" onChange={haandleChange}/><br/>
          <input type="password" value={confirmPassword} placeholder='confirmPassword' name="confirmPassword" onChange={haandleChange}/><br/>
          <button type="submit">Submit</button>
        </form>
      </center>
     </div>
 )  
}

export default App;
