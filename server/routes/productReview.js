const router = require("express").Router();
const productReviewController = require("../controllers/productReviewController");

router
  .route("/")
  .get(productReviewController.getAll)
  .post(productReviewController.add);
router
  .route("/:id")
  .get(productReviewController.getOne)
  .delete(productReviewController.delete1);

module.exports = router;
