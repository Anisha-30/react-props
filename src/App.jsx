import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter'
import User from './User'
import School from './School'
import Student from './Student'
import Wrapper from './Wrapper'

//import './App.css'

function App() {

  let user1 ={
    name:"Jonathan",
    age:32
  }
   let user2 ={
    name:"Nancy",
    age:22
  }

  let schoolNames = ["VJVM","CCS","IPS","OS","DPS"];
  const[name,setname] = useState("Manshi")

  return (
    <>
      <Counter/>
       { /* <User name="Nancy" age={22}/> */}
      <User user={user1}/>
      <User user={user2}/>
      <School name={schoolNames}/>

      <Student name={name}/>
      <button onClick={()=> setname("Priyanshi")}>update student</button>

      <hr />
      <Wrapper>
        <h1 style={{color:"red"}}>This is wrapper text</h1>
      </Wrapper>

      <Wrapper color="blue">
        <h1 >This is wrapper text with color</h1>
      </Wrapper>

       <Wrapper>
        <h1 >This is wrapper text with default color</h1>
      </Wrapper>
      
      
    </>
  )
}

export default App
