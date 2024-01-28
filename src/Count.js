import { useContext } from "react";
import { store } from "./App";
function Count() {
    const [data,setData]=useContext(store)
    return (
        <div style={{backgroundColor:"pink"}}>
            <h1>Count:{data.length}</h1>
        </div>
    )
}

export default Count