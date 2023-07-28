const express = require("express");
const router = express.Router();
const todoController = require("./todo.controller");

router.get("/", async (req, res) => {
  const results = await todoController.list();
  res.json({ data: results });
});

//create
router.post("/", async (req, res) => {
  const results = await todoController.create(req.body);
  res.json({ data: results });
});

//read by id
router.get("/:id", async (req, res) => {
  const results = await todoController.getById(req.params.id);
  res.json({ data: results });
});

router.put("/:id", async (req, res) => {
  const results = await todoController.update(req.params.id, req.body);
  res.json({ data: results });
});

router.delete("/:id", async (req, res) => {
  const results = await todoController.remove(req.params.id);
  res.json({ data: results });
});
module.exports = router;
