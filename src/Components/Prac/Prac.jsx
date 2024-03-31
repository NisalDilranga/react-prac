import React from "react";

function Prac(){

    function add1(name ){
        console.log("hello1 "+ name)
      }
      const add2  = (e) =>{
    
        console.log("hello2",e)
      }
    
      return(
        <>
        <button onClick={()=>{
    
        add1("nisal")
        }}>Add</button>
        <button onClick={add2}>add2</button>
        </>
      )
    }