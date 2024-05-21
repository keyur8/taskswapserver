const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const cors = require("cors");
const upload = require("../config/multerconfig.js");
const auth = require('../middleware/auth');

router.use(cors());
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post(
  "/profile",
  upload.single("profilePicture"),
  authController.profile
);
router.get('/current', auth, authController.getCurrentUser);
module.exports = router;
