import React from 'react'

const TaskList = ({tasks, template , completeTask, deleteTask}) => {
  const Task = template;
  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task, idx) => (
        <Task key={idx} id={idx} task={task} completeTask={completeTask} deleteTask={deleteTask} />
      ))}
    </div>
  )
}

export default TaskList
