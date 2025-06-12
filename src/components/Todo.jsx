import React from "react";

const First = () => {
    return (
        <>

            <div>
                <h1>To-Do Application</h1>
            </div>
            <div>
                <input type="string" id="txt" placeholder="Enter your text here"></input>
                <button onClick={Todo_fun}>Enter</button>
            </div>
            <div id="task" >

            </div>

        </>
    )
}

const Todo_fun = () => {
    const text = document.getElementById('txt').value;

    if (text == '') {
        alert('please enter your task')
        return
    }
    const list = document.createElement('li');
    list.textContent = text;
const button_delete = document.createElement('button');
  button_delete.innerText = 'delete';
  button_delete.onclick =() =>{
    list.remove();  
  }
 
    list.appendChild(button_delete);

    document.getElementById('task').appendChild(list);
    document.getElementById('txt').value = "";

    





}

export default First;