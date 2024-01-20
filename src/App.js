import React from 'react';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div>
       <h1>Hello World</h1>
       <Link to='/todolist'>Todos</Link>
    </div>
  )
}

export default App