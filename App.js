import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function App() {
    const YOUR_APP_ID="b9824796";
    const YOUR_APP_KEY="0b237936e11064e230daa29d7b186ac2";   
    const[search,setSearch]=useState("")
    const handleChange=e=>{
        setSearch(e.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&colories=591-722&health=alcohol-free`).then((res)=>{
            res.json()
        }).then((result)=>{
            console.log(result)
        })
    }
  return (
    <div>
        <center>
            <form onSubmit={handleSubmit}>
                <Form.Control size="lg" type="text" placeholder="Search an item" width={1000} onChange={handleChange} value={search}/>   <br/>
                <Button variant="outline-primary" input type="submit" value="submit" >Search</Button>
            </form>

        </center>
    </div>
  )
}

export default App