const Router = require("express");
const router = new Router();
const attendanceController = require("../controllers/attendanceController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("USER"), attendanceController.create);
router.get("/", attendanceController.getAll);

module.exports = router;
