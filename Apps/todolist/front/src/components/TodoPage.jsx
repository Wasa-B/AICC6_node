import React, { useEffect, useState } from 'react'
import TaskList from './TaskList'
import Task from './Task'
import { fetchTasks, addTask } from '../app/apiSlice';
import { useDispatch, useSelector } from 'react-redux';



const TodoPage = () => {
  const [input, setInput] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTaskAction(input);
      setInput('');
    }
  }

  const handleAddTask = () => {
    addTaskAction(input);
    setInput('');
  }

  const addTaskAction = (title) => {
    if (title.trim() === '') {
      return;
    }
    const newTask = {
      title: title,
      description: '',
      completed: false,
    }
    dispatch(addTask(newTask));
  }

  const completeTaskAction = (id) => {
    // dispatch(completeTask(id));
  }

  const deleteTaskAction = (id) => {
    console.log(id);
    // dispatch(deleteTask(id));
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
