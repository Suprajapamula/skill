import React from 'react'

function TodoList(props) {
    const todos=props.data;
    const handleDeleteTodo=props.handleDeleteTodo
  return (
    <div>
        {console.log(props)}
        {
          <table>
            {
                todos.map((todo,index)=>{
                   return (<tr key={index} style={{listStyle:"none"}}>
                              <td><b style={{width:"300px"}}>{todo}</b></td>&nbsp;&nbsp;
                              <td><button onClick={()=>{handleDeleteTodo(index)}}style={{backgroundColor:"red", color:"white", border:"1px solid black", borderRadius:"3px"}}>Delete</button></td>
                            </tr>)
                })
            }
          </table>
        }
    </div>
  )
}

export default TodoList