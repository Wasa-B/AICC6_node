const express = require("express");
const router = express.Router();
const {getTasks} = require("../controllers/tasksController")


router.get("/tasks", getTasks);


module.exports = router;
