const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const parts = authHeader.split(" ");

  if (parts.length !== 2) return res.status(401).json({ message: "Token error" });

  const [scheme, token] = parts;
  console.log("Received token:", token);


  if (!/^Bearer$/i.test(scheme)) return res.status(401).json({ message: "Malformed token" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });

    req.userId = decoded.id;
    next();
  });
};
