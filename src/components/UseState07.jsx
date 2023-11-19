import React from "react";
import { useState } from "react";
import Button from "./Button";
import "./UseState06.css";



export default function UseState07() {


  const [card, setCard] = useState({
    first : 0,
    second : 0,
    third : 0,
    });

    function first() {
      const f = {...card}
      f.first = f.first + 1
      setCard(f)
    
    }
    function second() {
      const s = {...card}
      s.second = s.second + 5
      setCard(s)
    }
    function third() {
      const t = {...card}
      t.third = t.third + 10
      setCard(t)
    }
    return(

    <>
    <h1> Spread Operator</h1>
    <hr />
    <br />
    <h3>The word is:
      <span className="first">{card.first}</span>
      <span className="second">{card.second}</span>
      <span className="third">{card.third}</span>
       </h3>
    <br />
    <Button description="First" calc= {first} style = "btn green"  />
    <Button description="Second" calc= {second} style = "btn yellow" />
    <Button description="Third" calc= {third} style = "btn red" />

    </>
    )


}
