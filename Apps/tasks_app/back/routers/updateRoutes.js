const router = require("express").Router();
const {updateCompleted, updateImportant, updateTask} = require("../controllers/updateTasks");

// Patch: 변경사항 부분만 업데이트
// Put: 변경 포함 전체 업데이트
router.patch("/update_completed_task", updateCompleted);

router.put("/update_task", updateTask);

module.exports = router;