const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
  res.send("subtask is running");
});

module.exports = router;
