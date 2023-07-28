//model-controller-routes
const express = require("express");
const router = express.Router();
const subtaskController = require("./subtask.controller");

router.use("/", (req, res) => {
  res.send("subtask is running");
});

router.post("/", async (req, res) => {
  const result = await subtaskController.create(req.body);
  res.json({ data: result });
});

module.exports = router;
