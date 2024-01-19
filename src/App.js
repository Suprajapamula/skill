import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function App() {
  return (
   <div>
        <ul>
            <Link to="/"><li><h1>Home</h1></li></Link>
            <Link to="/dashboard"><li><h1>Dashboard</h1></li></Link>
            <Link to="/about"><li><h1>About</h1></li></Link>
        </ul>
    </div>
  )
}

export default App

