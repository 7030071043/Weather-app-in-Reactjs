

import React from "react";

const Adding =()=>{
    const arr = ()=>{
 let num1 = parseInt(prompt('enter here 1st number'));
    let num2 = parseInt(prompt('enter here 2nd number'));
    let sum = num1 + num2;
    alert('the addition of two number is -'+sum)
    }
   
return(
    <>
    <h1>Addition of two numbers</h1>
    <button onClick= {arr}>ADDITION</button>
    </>
)
}
export default Adding;