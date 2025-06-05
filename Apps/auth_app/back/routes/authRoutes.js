const router = require("express").Router();
const {register, login} = require("../controllers/authController");
const upload = require("./upload");

router.post("/register",upload.single("profile_image"),register);
router.post("/login",login);

module.exports = router;