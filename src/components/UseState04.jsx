import React from "react";
import Number from "./numberChanger"; 


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