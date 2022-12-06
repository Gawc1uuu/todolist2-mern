const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/authMiddleware");
const {
  getAllTodos,
  getSignleTodo,
  addNewTodo,
  deleteTodo,
  editTodo,
} = require("../controllers/todosContollers");

router.use(authMiddleware);

router.get("/", getAllTodos);

router.post("/", addNewTodo);

router.get("/:id", getSignleTodo);

router.delete("/:id", deleteTodo);

router.put("/:id", editTodo);

module.exports = router;
