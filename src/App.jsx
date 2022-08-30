import React, { useState } from 'react'
import '../src/App.css'

import { v4 as uuidv4 } from 'uuid';
import Tasks from './components/Tasks';

import AddTask from './components/AddTask';




const App = () => {

  const message = <h1 className='neon-style'>TO-DO-LIST</h1>

  const [tasks, setTasks] = useState([
    {
      id:1,
      title:'Estudar Programação'
    },
    {
      id:2,
      title:'Fazer Academia'
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]
    setTasks(newTasks);
  }

  return (
  <>
     <main 
     className="tasksList">{message}
     <AddTask handleTaskAddition={handleTaskAddition}/>
     <Tasks tasks={tasks}/>
     </main>
  </>
  );
  
}

export default App
