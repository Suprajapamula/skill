import React, { useState } from 'react'

import { createContext } from 'react';
import Count from './Count';
import Display from './Display';

export const store=createContext()
function App() {
  const[data,setData]=useState([
    {
        name:"supraja"
    },
    {
        name:"sairam"
    },
    {
        name:"ambadas"
    },
    {
        name:"sunitha"
    }
  ])
  return (
    <center>
      <div>
        <h1>CART APPLICATION</h1>
        <store.Provider value={[data,setData]}>
        <Count/>
        <Display/>
        </store.Provider>
      </div>
    </center>
  )
}

export default App
