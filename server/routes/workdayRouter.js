const Router = require("express");
const workdayController = require("../controllers/workdayController");
const router = new Router();

router.post("/", workdayController.create);
router.get("/", workdayController.getAll);

module.exports = router;
