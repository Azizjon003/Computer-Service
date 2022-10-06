const router = require("express").Router();
const productDetails = require("../controllers/productDetailController");

router.route("/").post(productDetails.add).get(productDetails.getAll);
router
  .route("/:id")
  .delete(productDetails.delete1)
  .get(productDetails.getOne)
  .patch(productDetails.update);

module.exports = router;
