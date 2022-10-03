const router = require("express").Router();
const workerReview = require("../controllers/workerReviewController");

router.route("/").get(workerReview.getAll).post(workerReview.add);
router.route("/:id").get(workerReview.getOne).delete(workerReview.delete1);

module.exports = router;
