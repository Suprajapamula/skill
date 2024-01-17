import React,{useState} from 'react';
import './App.css';

function App() {
  const[count,setCount]=useState(0)
  return (
    <div>
      <center>
          <h1>{count}</h1>
          <button className="btn" onClick={()=>setCount(count+1)}>Click me to increment</button>
          <button className="btn" onClick={()=>setCount(count-1)}>Click me to decrement</button>
          <button className="btn" onClick={()=>setCount(0)}>Reset</button>
      </center>  
    </div>
  );
}

export default App;
