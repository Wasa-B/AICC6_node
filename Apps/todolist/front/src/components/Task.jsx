import React from 'react'
import { CheckSquare, Square, Trash2 } from 'lucide-react'

const Task = ({id, task, completeTask, deleteTask}) => {
  return (
    <div className='flex justify-between items-center'>
      <h1>{task.title}</h1>
      <div className="icons flex gap-2">
        <div onClick={() => completeTask(id)}>{task.completed ? (<CheckSquare/>) : <Square/>}</div>
        <div onClick={() => deleteTask(id)}><Trash2/></div>
      </div>
    </div>
  )
}

export default Task
