import React from "react";

import {CgClose} from 'react-icons/cg'

import './Task.css';


const Task = ({task, handleTaskClick, handleTaskDeletion }) => {
return(
  <div 
  className="task-container" 
  style={task.completed ? {backgroundColor:'#478747', textDecoration: 'line-through', 
  color:'#6f2232'
  }:{}}>

    <div className="task-title" onClick={()=>{handleTaskClick(task.id)}} >
      {task.title}
      
    </div>
    <div className="div-button-x">
        <button className="remove-task-button" onClick={()=>handleTaskDeletion(task.id)}><CgClose/>
        </button>
      </div>
      
  </div>

);
}

 //return <div className="task-container">{task.title}</div>
//</div>};
 
export default Task;