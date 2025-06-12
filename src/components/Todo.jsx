import React from "react";
import './style.css'
const First = () => {
    return (
        <>

            <div>
                <h1>To-Do Application</h1>
            </div>
            <div>
                <input type="string" class = "input-style" id="txt" placeholder="Enter your text here"></input>
                <button class="btn-bt1" onClick={Todo_fun}>Enter</button>
            </div>
            <div id="task" class="task-class">

            </div>

        </>
    )
}

const Todo_fun = () => {
  const text = document.getElementById('txt').value;

  if (text === '') {
    alert('please enter your task');
    return;
  }

  const list = document.createElement('div');
 
  const taskText = document.createElement('span');
  taskText.innerText = text;

  const button_delete = document.createElement('button');
  button_delete.innerText = 'delete';
  button_delete.className = 'delete-btn';
  button_delete.onclick = () => {
    list.remove();
  };

  const edit_button = document.createElement('button');
  edit_button.innerText = 'edit';
  edit_button.className = 'edit';
  edit_button.style.marginLeft = '10px';
  edit_button.onclick = () => {
    const updatedText = prompt("Edit your task:", taskText.innerText);
    if (updatedText && updatedText.trim() !== "") {
      taskText.innerText = updatedText;
    }
  };

  // Add task text and buttons to list item
  list.appendChild(taskText);
  list.appendChild(edit_button);
  list.appendChild(button_delete);

  document.getElementById('task').appendChild(list);
  document.getElementById('txt').value = "";
};


export default First;