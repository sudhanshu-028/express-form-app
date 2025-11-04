// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse form data (urlencoded)
app.use(express.urlencoded({ extended: true }));

// Serve static files if needed (CSS, images, etc.)
app.use(express.static("public"));

// Serve the form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Form submitted:", req.body);

  res.send(`
    <h2>Form Submitted Successfully!</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <a href="/">Go Back</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
