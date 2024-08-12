const TaskList = ({tasks}) => {
    console.log(tasks);
    return (
        <div>
          <h3>Lista de Tareas</h3>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      );
  }
  
  export default TaskList