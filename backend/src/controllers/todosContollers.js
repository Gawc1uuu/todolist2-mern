const mongoose = require("mongoose");

const getAllTodos = (req, res) => {
  res.status(200).json({ msg: "GET ALL TODOS" });
};

const addNewTodo = (req, res) => {
  res.status(200).json({ msg: "POSTING TODO" });
};

const getSignleTodo = (req, res) => {
  res.status(200).json({ msg: "GET SINGLE TODO" });
};
const deleteTodo = (req, res) => {
  res.status(200).json({ msg: "DELETE TODO" });
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
