import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./my-database.db');
db.run("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, completed BOOLEAN)");
const addTaskDB = (task) =>{
  db.run("INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)", [task.title, task.description, task.completed], (err) => {
    if (err) {
      console.error('Failed to insert task:', err.message);
      return;
    }
    console.log('Task inserted successfully');
  });
}

const getTasksDB = (callback) =>{
  db.all("SELECT * FROM tasks", (err, rows) => {
    if (err) {
      console.error('Failed to retrieve tasks:', err.message);
      return;
    }
    callback(rows);
  });
}

const updateTaskDB = (task) =>{
  db.run("UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?", [task.title, task.description, task.completed, task.id], (err) => {
    if (err) {
      console.error('Failed to update task:', err.message);
      return;
    }
    console.log('Task updated successfully');
  });
}

const deleteTaskDB = (id) =>{
  db.run("DELETE FROM tasks WHERE id = ?", [id], (err) => {
    if (err) {
      console.error('Failed to delete task:', err.message);
      return;
    }
    console.log('Task deleted successfully');
  });
}

export const getTasks = async (req, res) => {
  getTasksDB((tasks) => {
    res.json(tasks);
  });
}

export const addTask = async (req, res) => {
  addTaskDB(req.body)
  getTasksDB((t)=>{res.json(t)})
}

export const deleteTask = async (req, res) => {
  deleteTaskDB(req.body.id)
  getTasksDB((t)=>{res.json(t)})
}
