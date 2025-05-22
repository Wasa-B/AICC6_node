import React, { useEffect, useState } from 'react'
import TaskList from './TaskList'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, completeTask, deleteTask, updateTasks } from '../app/toDoTask'
import Task from './Task'
import axios from 'axios'

const TodoPage = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.value)
  const [input, setInput] = useState("")

  useEffect(()=>{
    const getTasks = async()=>{
      const res = await axios.get("http://localhost:8000/tasks")
      dispatch(updateTasks(res.data))
    }
    getTasks()
  },[]);

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
    testPost(input, "New Description", false);
    setInput("")
  }

  const testPost = async(title, description, completed)=>{
    const response = await axios.post("http://localhost:8000/test", {
      title: title,
      description: description,
      completed: completed
    })
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
