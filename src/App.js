import { useReducer } from "react";

const count=0
function counterReducer(state=count,action) {
  if(action.type==="Inc"){
    return state=state+1
  }
  if(action.type==="Dec"){
    return state=state-1;
  }
  return state;
}

function App() {
    const[state,dispatch]=useReducer(counterReducer,count)
    return (
      <div>
        <center>
        <h1>Count:{state}</h1>
        <button onClick={()=>(dispatch({type:"Inc"}))}>Increment</button>
        <button onClick={()=>{dispatch({type:"Dec"})}}>Decrement</button>
        </center>
      </div>
    )
}
export default App
