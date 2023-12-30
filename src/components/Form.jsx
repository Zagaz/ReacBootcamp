import React from "react";
import { useState } from "react";

function Form(){
     const [name,setName] = useState("");
     const [textarea,setTextarea] = useState("");
     const [value,setValue] = useState("");
     const handleSubmit = (event) => {
          event.preventDefault();
          alert(`The name you entered was: ${name}`)
          setValue(name);
          setTextarea(event.target.value)
        }

     return(
         <>
         <form onSubmit={handleSubmit }>
          <br />
                <label>
                      Name:
                      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </label>
                <br />   
                <br />   
                <textarea value={textarea} onChange={(e)=>setTextarea(e.target.value)} />
                    <br />
                <input type="submit" value="Submit" />
         </form>
         <h1>Value:{value}</h1>
         </>
     )
}
export default Form;

