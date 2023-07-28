const SubtaskModel = require("./subtask.model");

//
const create = (payload) => {
  // writing in DB
  return SubtaskModel.create(payload);
};

const list = () => {
  // pagination
  return SubtaskModel.aggregate([
    {
      $lookup: {
        from: "subtasks",
        localField: "_id",
        foreignField: "todo_id",
        as: "subtasks",
      },
    },
  ]);
};

const getById = (id) => {
  return SubtaskModel.findOne({ _id: id });
};

const update = (id, payload) => {
  return SubtaskModel.updateOne({ _id: id }, payload);
};

const remove = (id) => {
  return SubtaskModel.deleteOne({ _id: id });
};

module.exports = { create, list, getById, update, remove };
