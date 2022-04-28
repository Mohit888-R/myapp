import React from "react";
import Calc,{add,sub,mult,div} from './Calc'


function App() {
    return ( 
      <>
      {/* <div className="greeting">
      <h1>Hello Sir, <span>good Morning</span>.</h1>
      </div> */}
      <ul>
        <li>{add(40,2)}</li>
        <li>{sub(40,2)}</li>
        <li>{mult(40,2)}</li>
        <li>{div(30,3)}</li>
      </ul>
      </> 
    );
}

export default App;