import React, { useState } from 'react';

import Button from './Button';

import './AddTask.css'

    const  AddTask = ({handleAddTaskAddition}) => {
    const[inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value)
    };

    const handleAddTaskClick=()=>{
        handleAddTaskAddition(inputData)
    }

    return (
  <div className='add-task-container'>
      <input onChange={handleInputChange}
      value ={inputData}

      className='add-task-input' type="text"  placeholder="Enter your to do.." />;

      <Button onClick={handleAddTaskClick}>Add</Button>

  </div>
  );
 }
  
 export default AddTask;