import React from 'react'
import './App.scss'

// import UseState01 from './components/UseState01'
// import UseState02 from './components/UseState02'
// import UseState03 from './components/UseState03'
// import UseState04 from './components/UseState04'
// import UseState05 from './components/UseState05'
// import UseState06 from './components/UseState06'
// import UseState07 from './components/UseState07'
// import UseState08 from './components/UseState08'  
// import UseState09 from './components/UseState09'  
// import UseState10 from './components/UseState10'
// import Ship from './components/Ship'
// import Form from './components/Form'
// import Form from './components/State'
import State from './components/State'

export default function App() {
  //array with start trek captains and ships
  const trek = [
    {
      name: "Kirk",
      ship: "Enterprise",
    },
    {
      name: "Picard",
      ship: "Enterprise",
    },
    {
      name: "Sisko",
      ship: "Deep Space Nine",
    },
    {
      name: "Janeway",
      ship: "Voyager",
    },
    {
      name: "Archer",
      ship: "Enterprise",
    }
  ]


  return (
    <>

      {/* <UseState01 /> */}
      {/* useState for 2 different variables */}
      {/* <UseState02 /> */}
      {/* Same as above, but calculating the hypotenuse of a triangle */}
      {/* <UseState03 /> */}
      {/* Usinh map to iterate*/}
      {/* <UseState04 /> */}
      {/* Using a button component to change staate on parent | passing a function as a property */}
      {/* <UseState05 />     */}
      {/* Using a button component to change state on parent | passing a function as a property */}
      {/* <UseState06/>     */}

      {/* Spread Operator e.g: const f = {...card} */}
      {/* <UseState07/>     */}
      {/* Cards with spread operator */}
      {/* <UseState08/> */}
      {/* SElector; */}
      {/* <UseState09/> */}

      {/* <UseState10 /> */}

      {/* <<Ship> />*/}
      {/* {trek.map((key, index) => (
        <Ship key={index} captain={key.name} ship={key.ship} />
      ))} */}

      {/* Form */}
      {/* <Form /> */}

      {/* UseStateHook */}
      <State />





    </>
  )
}