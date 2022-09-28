const router = require("express").Router();
const liveSearchController = require("../controllers/liveSearch");

router.route("/:name").get(liveSearchController.search);

module.exports = router;
