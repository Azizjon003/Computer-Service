const router = require("express").Router();
const serviceController = require("../controllers/serviceController");

router.route("/").post(serviceController.add).get(serviceController.getAll);
router
  .route("/:id")
  .delete(serviceController.delete1)
  .get(serviceController.getOne)
  .patch(serviceController.update);

module.exports = router;
