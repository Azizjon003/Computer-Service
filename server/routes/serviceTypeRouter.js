const router = require("express").Router();
const serviceTypeController = require("../controllers/serviceTypeController");

router
  .route("/")
  .post(serviceTypeController.add)
  .get(serviceTypeController.getAll);
router
  .route("/:id")
  .delete(serviceTypeController.delete1)
  .get(serviceTypeController.getOne)
  .patch(serviceTypeController.update);

module.exports = router;
