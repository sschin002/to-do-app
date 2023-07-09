const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
});

module.export = mongoose.model("Todo", todoSchema);
