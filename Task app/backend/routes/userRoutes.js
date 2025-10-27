const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authMiddleware.js')
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userController.js");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/current", protect, getCurrentUser);

module.exports = router;
