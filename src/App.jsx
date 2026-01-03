import { useState } from 'react'
import './App.css'
import Event from '../src/Event'
import Counter from './assets/Counter'
// import LogIn from './assets/logIn'
import Count from './assets/Count'
import Counter1 from './assets/Counter1'
import Button from './assets/button'
import Counter2 from './assets/Counter2'



// function App (){
//   const [count , setCount] = useState(0)
// function Increase (){
//   setCount(count + 2)
// }
//   function Decrease (){
//     setCount (count - 1)
//   }
//   return(
//     <div>
//       <h3>
//         Week 2, Lab 1
//       </h3>
//       <p>
//         Learning Event and State 
//       </p>
//       <h2>
//         Count: {count}
//       </h2>
//     {/* <button onClick={() => setCount(count + 1)}>
//       Increase
//     // </button> the easy way */}
//     <button onClick={Increase}>
//       Increase
//     </button>
//     <button onClick={Decrease}>
//       Decrease
//     </button>
//     </div>
//   )
// }

function App(){
  return (
    <div>
      {/* <Event> 

      </Event> */}
      {/* <Counter></Counter> */}
      {/* <LogIn></LogIn> */}
   {/* <Count></Count> */}
   {/* <Counter1></Counter1> */}
   {/* <Button> </Button> */}
   <Counter2></Counter2>
    </div>
  )
}


export default App
