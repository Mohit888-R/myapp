import React, { useState } from "react";
import { questions } from "./api";
import Myaccordion from "./Myaccordion";

const Accordion = () =>{
  const [data, setdata] = useState(questions);

    return (
      <>
      <section>
        <h1>react interview questions</h1>
        {
            data.map((currele)=>{

              const {id} = currele;
              return <Myaccordion key = {id} {...currele}/>
            })
        }
        </section>
      </>  
    );
}


export default Accordion;