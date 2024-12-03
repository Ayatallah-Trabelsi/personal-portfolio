const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Handle contact form submission
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  console.log("Received contact form submission:", {
    firstName,
    lastName,
    email,
    phone,
    message,
  });

  // Mock response
  res.status(200).json({ code: 200, message: "Message sent successfully!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
