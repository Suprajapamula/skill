import axios from 'axios'
import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';


function TodoList() {
  const[todo,setTodo]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
        setTodo(res.data)
    })
  },[])
  return (
    <div>
        <h1>TodoList data</h1>
        <ul>
            {
                todo.length>=0 && todo.map((item,index)=>{
                    return <Link to={`/todo/${item.id}`}><li key={index} style={{border:"1px solid black", margin:"2px", padding:"5px", listStyleType:"none"}}> {item.title} </li></Link>
                })
            }
        </ul>
    </div>

  )
}

export default TodoList