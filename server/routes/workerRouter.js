const router = require("express").Router();
const workerController = require("../controllers/workerController");

router.route("/").get(workerController.getAll).post(workerController.add);
router
  .route("/:id")
  .get(workerController.getOne)
  .patch(workerController.update)
  .delete(workerController.delete1);

module.exports = router;
