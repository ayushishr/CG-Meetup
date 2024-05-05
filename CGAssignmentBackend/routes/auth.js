const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "Email already exists" });

  const newUser = new User({ username, email, password });
  await newUser.save();

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.status(201).json({ token, user: { id: newUser._id, username: newUser.username, email: newUser.email } });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isValidPassword = await user.validatePassword(password);
  if (!isValidPassword) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });
});


module.exports = router;
