import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const[count,setCount]=useState(0);
  useEffect(()=>{console.log("clicked",count)},[])//Empty dependency, It will executes after return statement for only once
  return (

    <div className="App">
       <center>
          <h1>You clicked for {count} times</h1>
          <button onClick={()=>setCount(count+1)}>click</button>
       </center>
    </div>
  );
}

export default App;
