import React from "react";


export default function Cathetus({
     calc,
     description
}) {
     return (

          <>
               <button onClick={calc}>
                    {description}
               </button>

          </>

     )
}