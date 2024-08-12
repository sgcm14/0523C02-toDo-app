const TaskButtons = ({addTask}) => {
  console.log(addTask);
  const tasks = ['Pasear al perro', 'Hacer tarea DH', 'Barrer la casa'];

  return (
    <div>
      {tasks.map((task, index) => (
        <button key={index} onClick={() => addTask(task)}>
          {task}
        </button>
      ))}
    </div>
  );
}

export default TaskButtons