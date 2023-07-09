const TodoModel = require("./todo.model");

//
const create = (payload) => {
  // writing in DB
  return TodoModel.create(payload);
};

const list = () => {
  // pagination
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
