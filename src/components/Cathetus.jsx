import React from "react";


export default function Cathetus({
     calc,
     description,
     style
}) {
     return (

          <>
               <button onClick={calc} className={style}>
                    {description}
               </button>

          </>

     )
}