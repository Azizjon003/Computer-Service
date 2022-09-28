const router = require("express").Router();
const productCategory = require("../controllers/productCategoryController");

router.route("/").post(productCategory.add).get(productCategory.getAll);
router
  .route("/:id")
  .delete(productCategory.delete1)
  .get(productCategory.getOne)
  .patch(productCategory.update);

module.exports = router;
