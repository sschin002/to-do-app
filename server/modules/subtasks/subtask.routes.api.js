//model-controller-routes
const express = require("express");
const router = express.Router();
const subtaskController = require("./subtask.controller");

router.get("/", async (req, res) => {
  const results = await subtaskController.list();
  res.json({ data: results });
});

//create
router.post("/", async (req, res) => {
  const results = await subtaskController.create(req.body);
  res.json({ data: results });
});

//read by id
router.get("/:id", async (req, res) => {
  const results = await subtaskController.getById(req.params.id);
  res.json({ data: results });
});

router.put("/:id", async (req, res) => {
  const results = await subtaskController.update(req.params.id, req.body);
  res.json({ data: results });
});

router.delete("/:id", async (req, res) => {
  const results = await subtaskController.remove(req.params.id);
  res.json({ data: results });
});

module.exports = router;
