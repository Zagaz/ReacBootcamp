import { useState } from 'react'

export default function UseState02() {
     const [value, setValue] = useState(0)

     function increment() {
          setValue(old => old + 1)
     }
     function decrement() {
          setValue(old => old - 1)
     }
     function clear() {
          setValue(old => old = 0)
     }

     return (
          <>
               <h1>useState01</h1>
               <h3>Value: {value}</h3>
               <button onClick={increment}>ADD</button>
               <button onClick={decrement}>SUB</button>
               <button onClick={clear}>CLEAR</button>
               <br />
               <br />
               <hr />
          </>
     )

}