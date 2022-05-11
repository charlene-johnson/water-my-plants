const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to Water My Plants API",
  });
});

module.exports = router;
