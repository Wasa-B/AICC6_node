import React from 'react'
import TaskList from './TaskList'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, completeTask, deleteTask } from '../app/toDoTask'
import Task from './Task'
const TodoPage = () => {
  const tasks = useSelector((state) => state.tasks.value)
  const dispatch = useDispatch()

  const completeTaskAction = (id) => {
    return dispatch(completeTask(id))
  }
  const deleteTaskAction = (id) => {
    return dispatch(deleteTask(id))
  }

  return (
    <div>
      <h1>Todo Page</h1>
      <button onClick={() => dispatch(addTask({
        title: "New Task",
        description: "New Description",
        completed: false
      }))}>Add Task</button>
      <TaskList tasks={tasks} template={Task} completeTask={completeTaskAction} deleteTask={deleteTaskAction} />
    </div>
  )
}

export default TodoPage
