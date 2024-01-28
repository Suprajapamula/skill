import { useContext, useState } from "react";
import { store } from "./App";
function Display() {
    const[data,setData]=useContext(store)
    const[uname,setUname]=useState("");
    function handleSubmit(e){
        e.preventDefault()
        setData([...data,{name:uname}])
    }
  return (
    <div style={{border:"1px solid black",padding:"20px",backgroundColor:"seagreen"}}>
        <h1>Details</h1>
        {
            data.map((item,i)=>{
                return <h5 key={i}>{item.name}</h5>
            })
        }
        <form onSubmit={handleSubmit}>
            <input type="text" value={uname} onChange={(e)=>setUname(e.target.value)}/>
            <input type="submit" value="Add"/>
        </form>
    </div>
  )
}

export default Display