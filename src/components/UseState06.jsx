import React from "react";
import { useState } from "react";
import Cathetus from "./Cathetus";

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


     let h = Math.sqrt(a * a + b * b);
     let sin = a / h;
     let cos = b / h;
     let arcsine = Math.asin(sin);
     let arccosine = Math.acos(cos);

     return (
          <>
               <h1> Trigonometry</h1>
               <h2> Cathetus A = : {a}  </h2>
               <h2> Cathetus B = : {b}  </h2>
               <h2> Hypotenuse = : {h}  </h2>
               <h2>sine = {sin}</h2>
               <h2>cosine = {cos}</h2>
               <h2> Arcsine = {arcsine} deg </h2>
               <h2> Arccosine = {arccosine} deg </h2>
               <Cathetus description="addA"
                    calc={addA} />
               <Cathetus description="subA"
                    calc={subA} />
               <br />
               <Cathetus description="addB"
                    calc={addB} />
               <Cathetus description="subB"
                    calc={subB} />
               <br />
               <Cathetus description="reset"
                    calc={reset} />
               <br />
          </>
     )
}

