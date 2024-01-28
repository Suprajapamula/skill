import React, { useState } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import { createContext } from 'react';

export const store=createContext()

function App() {
  const[data,setData]=useState(0)
  return (
    <center>
        <div>
          <store.Provider value={[data,setData]}>
            <ComponentA/>
            <ComponentB/>
            <button onClick={()=>{setData(data+1)}}>Increment</button>
          </store.Provider>
        </div>
    </center>
  )
}

export default App
