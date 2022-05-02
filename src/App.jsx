import React,{useState} from "react";
// import Calc,{add,sub,mult,div} from './Calc'



function App() {

// start firstname block
const [inputname,setname] = useState();
const [name,setinputname] = useState();

const [inputlname,setlname] = useState();
const [lname,setinputlname] = useState();


const[inputemail,setemail] = useState();
const [inputmail,setmail] = useState();


function onclick(event){
  event.preventDefault();
  setname(name);
  setlname(lname);
  setemail(inputmail);
}

function inputsetname(event){
  setinputname(event.target.value);
}

const inputlastname=(event)=>{
  setinputlname(event.target.value);
}


const inputsetemail=(event)=>{
  setmail(event.target.value);
}

  return ( 
    
      <>
      <form onSubmit={onclick} >
      <h1>Hello {inputname} {inputlname}</h1> 
      <p>{inputemail}</p>

      <input type="text"  placeholder="enter your firstname" onChange={inputsetname} value={name}/><br />
      <input type="text" placeholder="enter your lastname" onChange={inputlastname} value={lname}/><br />
      <input type="text" placeholder="enter your email" onChange={inputsetemail} value={inputmail}/><br />

      <button type="submit">Click👍</button>
      </form>
      </> 
    );
}

export default App;