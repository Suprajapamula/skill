import React from 'react'
import { store } from './App';
import { useContext } from 'react';
function ComponentA() {
    const[data,setData]=useContext(store)
  return (
    <div>ComponentA {data}</div>
  )
}

export default ComponentA