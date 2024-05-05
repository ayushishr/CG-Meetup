const User = require ("../models/User");

exports.getUserDetails = async (req, res) => {
    console.log("Inside getUserDetails controller");
    try {
      // Get user id from req.userId or other relevant source
      const userId = req.userId;
  
      const user = await User.findById(userId).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  