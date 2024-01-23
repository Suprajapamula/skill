import React from 'react'
import { connect } from 'react-redux';
function Counter(props) {
  return (
    <div>
        <center>
            <h1>Counter:{props.c}</h1>
            <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>
            <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrement</button>
            {console.log(props)}
        </center>
    </div>
  )
}

export default connect(store=>store)(Counter)