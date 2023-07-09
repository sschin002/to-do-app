const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
  res.send("app is running");
});

module.exports = router;
