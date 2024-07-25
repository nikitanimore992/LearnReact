import axios from "axios";
import { useState } from "react"


function App() {

  // const[rollno,setRollno]=useState("");
  // const[name,setName]=useState("");
  // const[city,setCity]=useState("");
  // const[fees,setFees]=useState("");
  const[input,setInput]=useState("");
  const handleInput=(e)=>{
    let name=e.terget.name;
    let value=e.target.value;
    setInput((values)=>({...values, [name]:value}))
    console.timeLog(input)
  }
  const handleSubmit=()=>{
      let api="http://localhost:3000/Student";
      axios.post(api, input).then((res)=>{
        console.log(res);
        alert("data save succsefully !!!");
      })
  }
  return (
    <>
     Enter Rollno : <input type="text" name="rollno"value={input.rollno} onChange={handleInput}/>
     <br/><br/>
     Enter Name : <input type="text" name="name" value={input.name} onChange={handleInput}/>
     <br/><br/>
     Enter city : <input type="text" name="city" value={input.city} onChange={handleInput}/>
     <br/><br/>
     Enter fees : <input type="text" name="fees" value={input.fees} onChange={handleInput}/>
     <br/><br/>
     <button onClick={handleSubmit}>Data Save!!</button>
    </>
  )
}

export default App
