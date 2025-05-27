const router = require("express").Router();
const {postTask} = require("../controllers/postTask");
const {updateCompleted, updateImportant} = require("../controllers/updateTasks");

router.post("/post_task", postTask);

module.exports = router;