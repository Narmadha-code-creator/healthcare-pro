const router = require("express").Router();
const auth = require("../middleware/auth");
const { predict } = require("../controllers/healthController");

router.post("/predict", auth, predict);

module.exports = router;