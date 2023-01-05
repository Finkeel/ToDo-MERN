const express = require("express");
const router = express.Router();
const todoController = require("../../controllers/api/todos");

router.get("/", todoController.indexNotComplete, todoController.jsonTodos);
router.get(
  "/completed",
  todoController.indexComplete,
  todoController.jsonTodos
);
router.delete("/:id", todoController.destroy, todoController.jsonTodo);
router.put("/:id", todoController.update, todoController.jsonTodo);
router.post("/", todoController.create, todoController.jsonTodo);
router.get("/:id", todoController.show, todoController.jsonTodo);

module.exports = router;
