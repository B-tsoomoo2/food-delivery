const express = require("express");
const app = express();

app.get("/", (req, res) => {
  try {
    res.status(200).send("API ажиллаж байна 🚀");
  } catch (error) {
    res.status(500).json({
      message: "Route crashed",
      error: error.message,
    });
  }
});

module.exports = app;