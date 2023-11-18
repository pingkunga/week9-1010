const express = require("express");
const app = express();
const PORT = 3000;

// Simple endpoint
app.get("/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
