const Router = require("express");
const router = new Router();
const staffController = require("../controllers/staffController");

router.post("/", staffController.create);
router.get("/", staffController.getAll);

module.exports = router;
