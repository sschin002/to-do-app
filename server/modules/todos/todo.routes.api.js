const express = require("express");
const router = express.Router();
const todoController = require("./todo.controller");

router.get("/", (req, res) => {
  res.send("todo is running");
});

router.post("/", async (req, res) => {
  const todoResult = await todoController.create(req.body);
  res.json({ data: todoResult });
});
module.exports = router;
