const database = require("../database/database");

exports.updateCompleted = async (req, res) => {
  const {itemId, isCompleted} = req.body;
  // console.log(_id, title, description, date, isCompleted, isImportant, userId)
  try {
    await database.query(
      "UPDATE tasks SET isCompleted = $1 WHERE _id = $2",
      [isCompleted, itemId]
    );
    res.status(200).json({message: "Task updated successfully"});
  } catch (error) {
    res.status(500).json({error: "Update Task Failed" + error.message});
  }
}
exports.updateImportant = async (req, res) => {
  const {itemId, isImportant} = req.body;
  try {
    await database.query(
      "UPDATE tasks SET isImportant = $1 WHERE _id = $2",
      [isImportant, itemId]
    );
    res.status(200).json({message: "Task updated successfully"});
  } catch (error) {
    res.status(500).json({error: "Update Task Failed" + error.message});
  }
} 

exports.updateTask = async (req, res) => {
  const {itemId,title, description, date, isCompleted, isImportant} = req.body;
  // console.log(_id, title, description, date, isCompleted, isImportant, userId)
  // console.log("Update Request : ", req.body);
  try {
    await database.query(
      "UPDATE tasks SET title = $1, description = $2, date = $3, isCompleted = $4, isImportant = $5 WHERE _id = $6",
      [title, description, date, isCompleted, isImportant, itemId]
    );
    res.status(201).json({message: "Task updated successfully"});
  } catch (error) {
    res.status(500).json({error: "Update Task Failed" + error.message});
  }
}