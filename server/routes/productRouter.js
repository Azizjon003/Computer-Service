const router = require("express").Router();
const productController = require("../controllers/productControler");

router.route("/").post(productController.add).get(productController.getAll);
router
  .route("/:id")
  .delete(productController.delete1)
  .get(productController.getOne)
  .patch(productController.update);

module.exports = router;
