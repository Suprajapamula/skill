import React, { useState } from 'react'
import { connect } from 'react-redux'
function Todolist(props) {
    const[newtodo,setNewtodo]=useState("");
  return (
    <div>
        <h1>TODOLIST</h1>
        <input type="text" onChange={(e)=>setNewtodo(e.target.value)}/>
        <button onClick={()=>{props.dispatch({type:"ADDTODO",payload:newtodo})}}>AddTodo</button>
    
        {console.log(props)}
        {
        props.t.map((el,i)=>{
            return <h4 key={i}>{el}</h4>
        })
    }
    </div>
  )
}

export default connect((store)=>{return store})(Todolist)