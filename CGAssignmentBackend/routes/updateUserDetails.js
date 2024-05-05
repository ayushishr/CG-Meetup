const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middlewares/auth");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.put("/", authMiddleware, async (req, res) => {
  const { username, email, password, newPassword } = req.body;

  const user = await User.findById(req.userId);
  if (!user) return res.status(400).json({ message: "User not found" });

  const isValidPassword = await user.validatePassword(password);
  if (!isValidPassword) return res.status(400).json({ message: "Invalid old password" });

  if (newPassword) {
    // Remove this line
    // const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    // Assign the new password directly to the user
    user.password = newPassword;
  }

  user.username = username || user.username;
  user.email = email || user.email;

  await user.save();
  res.status(200).json({ message: "User details updated successfully" });
});

module.exports = router;
