import React from 'react'
import UseState01 from './components/UseState01'
import UseState02 from './components/UseState02'
import UseState03 from './components/UseState03'
import UseState04 from './components/UseState04'
import UseState05 from './components/UseState05'

export default function App() {
  return (
    <>
    {/* Simple useState add/sub/reset */}
      <UseState01 />
      {/* useState for 2 different variables */}
      <UseState02 />
      {/* Same as above, but calculating the hypotenuse of a triangle */}
      <UseState03 />
      {/* Usinh map to iterate*/}
      <UseState04 />
      {/* Using a button component to change state on parent | passing a function as a property */}
       <UseState05 />    
    </>
  )
}