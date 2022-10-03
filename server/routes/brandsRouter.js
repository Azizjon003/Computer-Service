const router = require("express").Router();
const brandsController = require("../controllers/brandsController");

router.route("/").post(brandsController.add).get(brandsController.getAll);
router
  .route("/:id")
  .delete(brandsController.delete1)
  .get(brandsController.getOne)
  .patch(brandsController.update);

module.exports = router;
