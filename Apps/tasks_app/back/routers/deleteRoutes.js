const router = require("express").Router();
const {deleteTask} = require("../controllers/deleteTask");

router.delete("/delete_task/:id", deleteTask);

module.exports = router;