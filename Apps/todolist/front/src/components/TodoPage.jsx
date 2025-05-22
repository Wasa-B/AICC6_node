import React, { useState } from 'react'
import TaskList from './TaskList'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, completeTask, deleteTask } from '../app/toDoTask'
import Task from './Task'
const TodoPage = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.value)
  const [input, setInput] = useState("")

  const completeTaskAction = (id) => {
    return dispatch(completeTask(id))
  }
  const deleteTaskAction = (id) => {
    return dispatch(deleteTask(id))
  }


  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask()
    }
  }

  const handleAddTask = () => {
    if (input.trim() === "") return
    dispatch(addTask({
      title: input,
      description: "New Description",
      completed: false
    }))
    setInput("")
  }


  return (
    <div className='container px-5'>
      <h1>Todo Page</h1>
      <div>
        <input type="text" placeholder='Add a new task' value={input} onKeyDown={handleKeyDown} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className=''>
        <TaskList tasks={tasks} template={Task} completeTask={completeTaskAction} deleteTask={deleteTaskAction} />
      </div>
    </div>
  )
}

export default TodoPage
