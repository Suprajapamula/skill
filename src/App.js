import React, { useState } from 'react'
import TodoList from './TodoList';

function App() {
  const[todo,setTodo]=useState("");
  const [data,setData]=useState([]);
  const handleChange=e=>{
    setTodo(e.target.value);
  }
  const handleSubmit=e=>{
    e.preventDefault();
    setData([...data,todo]);
    setTodo("");
  }
  const handleDeleteTodo=(indexValue)=>{
      const newTodos=data.filter((todo,index)=>{
          return index !==indexValue
      })
      setData(newTodos)
  }
  

 
  return (
    <div>
      <center>
        <h1>Todolist Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={handleChange}/>&nbsp;&nbsp;
          <input type="submit" style={{backgroundColor:"rgb(161, 244, 37)", border:"1px solid black", padding:"3px",borderRadius:"2px"}}/>
        </form>
        <TodoList data={data} handleDeleteTodo={handleDeleteTodo}/>
      </center>
    </div>
  )
}
export default App
