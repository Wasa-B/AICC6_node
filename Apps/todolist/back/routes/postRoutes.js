const express = require("express");
const router = express.Router();
const { addTask, deleteTask } = require("../controllers/tasksController");

router.post("/add_task", addTask);
router.post("/delete_task", deleteTask);

module.exports = router;
