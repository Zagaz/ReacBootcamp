import { useState } from 'react'
//Some exercises to practice useState

export default function UseState03() {
     const [value1, setValue1] = useState(1)
     const [value2, setValue2] = useState(2)


     function decrease_1() {
          setValue1(old => old - 1)
     }
     function increase_1() {
          setValue1(old => old + 1)
     }
     function decrease_2() {
          setValue2(old => old - 1)
     }
     function increase_2() {
          setValue2(old => old + 1)
     }



     return (
          <>
               <h1>useState03</h1>
               <h3>Value1: {value1}</h3>
               <h3>Value2: {value2}</h3>
               <br />
               <div>
                    <button onClick={decrease_1}>SUB 1</button>
                    <button onClick={increase_1}>ADD 1</button>
               </div>
               <br />
               <div>
                    <button onClick={decrease_2}>SUB 2</button>
                    <button onClick={increase_2}>ADD 2</button>
               </div>
               <br />
               <hr />
               <p>The hypotenuse of {value1} x {value2} is {
                    Math.sqrt(Math.pow(value1, 2) + Math.pow(value2, 2)).toFixed(2)
               }</p>
               <br />
               <hr />

          </>
     )

}