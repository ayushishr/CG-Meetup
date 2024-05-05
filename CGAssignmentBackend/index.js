const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
const serviceRoutes = require("./routes/services");
const updateUserDetailsRoutes = require("./routes/updateUserDetails");
const userDetailsRoutes = require("./routes/userDetailsRoutes");

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error connecting to MongoDB:", error));

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/update-user-details", updateUserDetailsRoutes);

app.use("/api/user-details", userDetailsRoutes);

console.log("User details route registered");
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
