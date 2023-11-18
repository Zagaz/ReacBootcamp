import React from "react";
import { useState } from "react";


export default function number({ number }) {
     const [n, setN] = useState(0);

     function add(num) {
          return function () {
               setN(old => old + num)
          }
     }
     function sub(num) {
          return function () {
               setN(old => old - num)
          }
     }
     function clear() {
          return function () {
               setN(old => old = 0)

          }
     }

     return (
          <>
               <h1>Calculate: {number} </h1>
               <h3>Total: {n}</h3>
               <button onClick={add(number)} >+{number}</button>
               <button onClick={sub(number)} >-{number}</button>
               <button onClick={clear(number)} >Clear</button>
               <br />
               <hr />
               <br />
          </>

     )
}