const router = require("express").Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.route("/register").post(authController.register);

router.route("/").post(userController.add).get(userController.getAll);
router
  .route("/:id")
  .patch(userController.update)
  .get(userController.getOne)
  .delete(userController.delete1);

module.exports = router;
