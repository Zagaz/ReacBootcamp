import React from "react";
import { useState } from "react";

import "./style.css";

export default function UseState10() {
  const [trek, setTrek] = useState(
    {
      name: "Kirk",
      ship: "Enterprise",
      rank: "Captain",
      image : "https://pm1.aminoapps.com/6751/7d7ec64b432bc027ee666f95bb6fa02a7c882849v2_00.jpg"
    },
    {
      name: "Picard",
      ship: "Enterprise",
      rank: "Captain",
      image : "https://i.pinimg.com/originals/3f/6e/6b/3f6e6b1e9e7c0a2a5e9c1a5e0c2b8f8f.jpg"

    }
  )

  function fix() {
    setTrek(
      old => ({
        ...old, name : "Kirk"
      })

      )
    

  }



  return (

    <>
      <div className="w">

        <h1>{trek.name}</h1>
    
        <img src={trek.image} alt="Star Trek" />
        <h2>{trek.ship}</h2>

        <button onClick={fix}>Click </button>

     </div>


    </>
  )


}
