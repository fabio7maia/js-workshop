const db = require("../../db");

const setTodoStatus = (app) => {
  app.post("/status", async (req, res) => {
    const { id, status } = req.body;

    const todo = await db.getTodo({ id });

    console.log("setTodoStatus", { id, status, todo });

    if (todo && todo.status <= status) {
      const todos = await db.setTodoStatus({ id, status });

      res.json({ data: todos });
    } else {
      const todos = await db.allTodos();
      res.status(500).send({ error: "Invalid status", data: todos });
    }
  });
};

module.exports = setTodoStatus;
