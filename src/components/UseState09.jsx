import React from "react";
import { useState } from "react";

import "./style.css";

export default function UseState09() {
  const [color, setColor] = useState("red");

  function changeColor(v) {

    setColor(v);
  document.querySelector(".w").style.backgroundColor = "white";

  }

  return (

    <>
    <div className="w">

      <select  onChange={(e)=> changeColor(e.target.value)}>
        <option className="op" value="red" selected >Red</option>
        <option className="op" value="yellow">Yellow</option>
        <option className="op" value="green">Green</option>
      </select>
     {color === "red" && <div style={ 
        {backgroundColor: "red", width: "200px", height: "200px", margin: "auto"}
        }></div>}
      {color === "yellow" && <div style={
        {backgroundColor: "yellow", width: "200px", height: "200px", margin: "auto"}
        }></div>}
      {color === "green" && <div style={
        {backgroundColor: "green", width: "200px", height: "200px", margin: "auto"}
        }></div>}




  



    </div>


    </>
  )


}
