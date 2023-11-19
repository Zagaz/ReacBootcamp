import React from "react";
import { useState } from "react";
import Cathetus from "./Cathetus";
import "./UseState05.css";

// exercise 4
// DISCLAIMER
// Sorry, Pythagoras!!!
// This is a very simple example of how to use useState
// to make a simple counter.
// So, there's no such a thing as a triangle with 0 degrees
// or a negative side.
// This is just an example of how to use useState.
// The exercise is to make the buttons work as expected.
// END OF DISCLAIMER
export default function UseState06() {
     const [a, setA] = useState(4);
     const [b, setB] = useState(3);

     function addA() {
          setA(old => old + 1)
     }
     function subA() {
          setA(old => old - 1)


     }
     function addB() {
          setB(old => old + 1)

     }
     function subB() {
          setB(old => old - 1)

     }

     function reset() {
          setA(3)
          setB(4)

     }


     let h = Math.sqrt(a * a + b * b).toFixed(2);
     let sin = (a / h).toFixed(2);
     let cos = (b / h).toFixed(2);
     let arcsine = Math.asin(sin).toFixed(3);
     let arccosine = Math.acos(cos).toFixed(3);

     return (
          <>
               <div className="wrap">

                    <h1> Trigonometry</h1>
                    <hr />
                    <br />

                    <p><strong>Hypotenuse : </strong>  {h}  </p>
                    <p><strong>Sine : </strong> {sin}</p>
                    <p><strong>Cosine : </strong> {cos}</p>
                    <p><strong>Arcsine : </strong>  {arcsine} deg </p>
                    <p><strong>Arccosine:</strong>  {arccosine} deg </p>
               </div>

               <div className="wrap">

                    <div className="catetus">
                         <h2> Cathetus A : {a}  </h2>
                         <div className="catetusbt">
                              <Cathetus description="-" calc={subA} style="btn red" />
                              <Cathetus description="+" calc={addA} style="btn blue"   />
                         </div>
                    </div>



                    <br />
                    <div className="catetus">

                         <h2> Cathetus B : {b}  </h2>
                         <div className="catetusbt">

                         <Cathetus description="-"
                              calc={subB}
                              style="btn red"
                         />
                         <Cathetus description="+"
                              calc={addB}
                              style="btn blue"
                         />
                              </div>

                    </div>
                    <div className="resetwrap">

                         <Cathetus description="RESET"
                              calc={reset}
                              style="btn reset" />

                    </div>



               </div>



               <br />

               <br />
          </>
     )
}

