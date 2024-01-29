import React, { useMemo } from 'react'
import { useState } from 'react'
function App() {
  const[data,setData]=useState(0);
  const [number,setNumber]=useState(5);
  //const factRes=fact(number) (repitation of fact function is done, inorder to avoid it we use useMemo())
  const factRes=useMemo(()=>fact(number),[number])//fact function is called, when only number got changed
  function fact(n){
    let res=1;
    for(let i=n;i>=1;i--){
      res=res*i;
    }
    console.log("fact function called")
    return res;
  }
  return (
    <div>
      <center>
       Count:{data}<br/>
       Fact:{factRes}<br/>
       <button onClick={()=>setData(data+1)}>Count Increment</button>
       <button onClick={()=>setNumber(number+1)}>Number Increment</button>
       
      </center>
    </div>
  )
}

 export default App
