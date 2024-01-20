import React from 'react';
import Logo from './logo.svg';
function App() {
  return (
    <div>
       <h1>Downloading the file using React...</h1>
       <img src={Logo} alt="image" height="250" width="300"/>
       <a href={Logo} download="image"><button>Click heare to download</button></a>
       
    </div>
  )
}

export default App