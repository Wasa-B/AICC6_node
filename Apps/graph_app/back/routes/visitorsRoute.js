const router = require("express").Router();
const visitorsController = require("../controllers/visitorsController");

router.get("/visitors", visitorsController.getVisitors);

module.exports = router;
