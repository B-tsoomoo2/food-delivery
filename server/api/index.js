const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// 🔥 хамгийн чухал хэсэг
module.exports = app;