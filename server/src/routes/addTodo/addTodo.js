const db = require("../../db");

const addTodo = (app) => {
  app.post("/todo", async (req, res) => {
    console.log("addTodo", { body: req.body });
    const { todo } = req.body;

    const todos = await db.addTodo({ todo });

    res.json({ data: todos });
  });
};

module.exports = addTodo;
