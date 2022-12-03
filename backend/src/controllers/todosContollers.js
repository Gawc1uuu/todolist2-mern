const mongoose = require("mongoose");
const Todo = require("../models/todosModel");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (err) {
    return res.status(400).json({ err: "Cannot load todos" });
  }
};

const addNewTodo = async (req, res) => {
  const { text } = req.body;

  try {
    const newTodo = await Todo.create({ text });
    return res.status(200).json(newTodo);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

const getSignleTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ msg: "invalid document id" });
  }

  try {
    const singleTodo = await Todo.findById(id);
    return res.status(200).json(singleTodo);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(404).json({ msg: "invalid document id" });
  }

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    return res.status(200).json(deletedTodo);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};
const editTodo = (req, res) => {
  res.status(200).json({ msg: "EDIT TODO" });
};

module.exports = {
  getAllTodos,
  getSignleTodo,
  addNewTodo,
  deleteTodo,
  editTodo,
};
