const db = require("../../db");

const allTodos = (app) => {
  app.get("/todos", async (req, res) => {
    const todos = await db.allTodos();

    res.json({ data: todos });
  });
};

module.exports = allTodos;
