// import { useState } from "react"
import Container from 'react-bootstrap/Container';
import NavBar from './assets/NavBar';


function App() {
  // const [rollno , setRollno]=useState("");
  // const [name , setName]=useState("");
  // const [city , setCity]=useState("");
  // const [fees , setFees]=useState("");
  return (
    <>
     <Container>
         <NavBar/>   

     </Container>
      {/* Enter Rollno : <input type="text" value={rollno} onChange={(e)=>{setRollno(e.target.value)}}/>
      <br></br>
      Enter Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <br></br>
      Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
      <br></br>
      Enter fees : <input type="text" value={fees} onChange={(e)=>{setFees(e.target.value)}}/>
      <br></br>
     <button>Data save !!!</button> */}

    </>
  )
}

export default App
