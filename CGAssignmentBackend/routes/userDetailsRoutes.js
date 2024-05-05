const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");
const { getUserDetails } = require("../controllers/userDetailsController");

// Add middleware to protect the route if necessary
console.log("Defining user details route");
router.get("/", authMiddleware, getUserDetails);

module.exports = router;
