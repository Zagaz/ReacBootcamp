
import Captains from './components/Captains'
import { useState } from 'react'


export default function App() {
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
      <h1>Value: {value}</h1>
      <button onClick={increment}>ADD</button>
      <button onClick={decrement}>SUB</button>
      <button onClick={clear}>CLEAR</button>

      <br />
      <br />
      <hr />
    </>
  )


}