import React, { useState } from 'react'

import '../src/App.css'

import { BrowserRouter as Router} from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import Tasks from './components/Tasks';

import AddTask from './components/AddTask';
import Footer from './components/Footer';




const App = () => {

  const message = <h1 className='neon-style'>TO-DO-LIST</h1>

  const [tasks, setTasks] = useState([
    {
      id:1,
      title:'Clique no título da task para concluir/ativar a task;'
    },
    {
      id:2,
      title:'Clique no "x" para excluir task.'
    },
  ]);
const handleTaskClick = (taskId)=>{
  const newTasks = tasks.map((task)=>{
    if (task.id === taskId) return{...task, completed: !task.completed
    };
    return task;
    
  });
  setTasks(newTasks)
}


const handleTaskAddition = (taskTitle) => {
  const newTasks = [
    ...tasks,
    {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },
  ];

  setTasks(newTasks);
};


const handleTaskDeletion = (taskId) => {
  const newTasks = tasks.filter(task => task.id !== taskId)
  setTasks(newTasks)
}

  return (
  <Router>
     <main 
     className="tasksList">{message}
     <AddTask handleTaskAddition={handleTaskAddition} />
     <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
     </main>

    <Footer/>
  </Router>
  );
  
}

export default App
