import React from "react";
import Button from "./Button";
import { useState } from "react";

// exercise 3

// 1. Create a component called UseState05
// 2. Create a state variable called count
// 3. Create a function called add that adds 5 to count
// 4. Create a function called sub that subtracts 5 from count
// 5. Create a function called reset that sets count to 0
// 6. Render the count variable
// 7. Render three buttons that call the functions add, sub, and reset
// 8. Export the component
//9. The button must be in another component called Button.jsx and it must change the state on the parent component

export default function UseState05() {
     const [count, setCount] = useState(0);
     let addNumber = 5;

     function add(n) {
          setCount(old => old + n);
     }
     function sub(n) {
          setCount(old => old + n);
     }
     function reset() {
          setCount(0);
     }
     return (
          <>
               <h1>useState 05</h1>
               <h2>Value + 1 = {count}</h2>
               <Button description="add"
                    calc={() => add(addNumber)} />
               <Button description="sub"
                    calc={() => sub(-addNumber)} />
               <Button description="reset"
                    calc={reset} />

          </>
     )
}