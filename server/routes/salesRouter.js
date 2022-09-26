const router = require("express").Router();
const salesController = require("../controllers/salesController");

router.route("/").post(salesController.add).get(salesController.getAll);
router
  .route("/:id")
  .delete(salesController.delete1)
  .get(salesController.getOne)
  .patch(salesController.update);

module.exports = router;
