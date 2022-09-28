const router = require("express").Router();
const serviceType = require("../controllers/serviceReviewController");

router.route("/").get(serviceType.getAll).post(serviceType.add);
router.route("/:id").get(serviceType.getOne).delete(serviceType.delete1);

module.exports = router;
