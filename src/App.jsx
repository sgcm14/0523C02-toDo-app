import React, { useState } from 'react';
import './App.css'
import TaskButtons from "./components/TaskButtons"
import TaskList from "./components/TaskList"

function App() {

 // Estado para almacenar las tareas
 const [tasks, setTasks] = useState([]);

 // Función para agregar una nueva tarea al estado
 const addTask = (task) => {
   setTasks([...tasks, task]);
 };

 return (
   <div className="App">
     <div className="task-buttons">
       {/* Renderiza los botones de tareas y pasa la función addTask */}
       <TaskButtons addTask={addTask} />
     </div>
     <div className="task-list">
       {/* Renderiza la lista de tareas acumuladas */}
       <TaskList tasks={tasks} />
     </div>
   </div>
 );
}

export default App
