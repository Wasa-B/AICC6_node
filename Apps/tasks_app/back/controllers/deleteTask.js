const database = require("../database/database");

exports.deleteTask = async (req, res) => {
  const itemId = req.params.id;
  try {
    await database.query(
      "DELETE FROM tasks WHERE _id = $1",
      [itemId]
    );
    res.status(201).json({message: "Task deleted successfully"});
  } catch (error) {
    res.status(500).json({error: "Delete Task Failed" + error.message});
  }
}