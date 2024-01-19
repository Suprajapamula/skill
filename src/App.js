import React from 'react'
import ComponentC from './ComponentC';
export const UserContext=React.createContext();
function App() {
  return (
    <div>
       <UserContext.Provider value={"Data from App component to ComponentC"}>
           <ComponentC/>
       </UserContext.Provider>
      
    </div>
  )
}

export default App