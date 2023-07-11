const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/todoapp").then(() => {
  console.log("Database Connected!");
});

const indexRouter = require("./routes");

app.use(bodyParser.json()); //app.use(express.json());

app.use("/", indexRouter);

app.listen(8001, () => {
  console.log("Server running on port 8001");
});
