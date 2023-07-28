const TodoModel = require("./todo.model");

//
const create = (payload) => {
  // writing in
  // console.log("test000", payload);
  return TodoModel.create(payload);
};

const list = () => {
  // pagination--conmplex aggregation
  return TodoModel.find();
};

const getById = (id) => {
  return TodoModel.findOne({ _id: id });
};

const update = (id, payload) => {
  return TodoModel.updateOne({ _id: id }, payload);
};

const remove = (id) => {
  return TodoModel.deleteOne({ _id: id });
};

module.exports = { create, list, getById, update, remove };
