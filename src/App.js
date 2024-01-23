import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
function App() {
  const data=useRef();
  useEffect(()=>{
    data.current.focus()
  },[])
  return (
     <div>
      <center>
        <h1>Hello world</h1>
        <form onSubmit={
          (e)=>{e.preventDefault();
                console.log(data.current.value);
          }
        }>
        <input type="text" ref={data}/>
        <button>Submit</button>
        </form>
        </center>

     </div>
  )
}

export default App