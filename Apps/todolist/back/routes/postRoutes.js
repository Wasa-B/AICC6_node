const express = require("express");
const router = express.Router();
const { addTask } = require("../controllers/tasksController");

router.post("/test", addTask);

module.exports = router;
