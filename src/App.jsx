import React,{useState} from "react";
// import Calc,{add,sub,mult,div} from './Calc'



function App() {
  let time = new Date().toLocaleTimeString();
  
  const [cstime,ctime] = useState(time);

  const update=()=>{
    time = new Date().toLocaleTimeString();
    ctime(time);
  }

  setInterval(update, 1000);
  return ( 
    
      <>
      {/* <div className="greeting">
      <h1>Hello Sir, <span>good Morning</span>.</h1>
      </div> */}
      <p>DIGITAL CLOCK</p>
      <h1>{time}</h1>
      {/* <button onClick={updatetime}>Click</button> */}
      </> 
    );
}

export default App;