import { useState } from 'react'

export default function UseState02() {
     const [value, setValue] = useState(0)

     function increment_value(num) {
          setValue(old => old + num)
     }
     function decrement_value(num) {
          setValue(old => old - num)
     }

     return (
          <>
               <h1>useState02</h1>
               <h3>Value: {value}</h3>
               <button onClick={() => increment_value(10)}>ADD</button>
               <button onClick={() => decrement_value(10)}>SUB</button>


          </>
     )

}