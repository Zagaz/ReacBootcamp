import React from "react";
import Number from "./numberChanger"; 
// exercise 2

// 1. Create a component called UseState04
// 2. Create a state variable called numbers
// 3. Create a function called iterateNumbers that uses map to iterate over the numbers array
// 4. Render the numbers variable
// 5. Export the component

export default function UseState04(){
     let numbers = [1,5,10];
     let iterateNumbers = numbers.map(
          (number) => <Number number={number}
           />)
     return (
          <>
     {iterateNumbers}        
          </>
     ) 
}