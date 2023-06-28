const Router = require("express");
const router = new Router();

const attendanceRouter = require("./attendanceRouter");
const staffRouter = require("./staffRouter");
const userRouter = require("./userRouter");
const workdayRouter = require("./workdayRouter");

router.use("/user", userRouter);
router.use("/staff", staffRouter);
router.use("/attendance", attendanceRouter);
router.use("/workday", workdayRouter);

module.exports = router;
