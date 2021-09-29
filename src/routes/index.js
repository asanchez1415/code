const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => {
  res.render("index.html");
});

// HTML
router.get("/html", (req, res) => {
  res.render("html.html");
});

// CSS
router.get("/css", (req, res) => {
  res.render("css.html");
});

module.exports = router;
