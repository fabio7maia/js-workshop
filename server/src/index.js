const express = require("express");
const app = express();

const db = require("./db");

process.on("exit", function () {
  // Add shutdown logic here.
  db.disconnect();
});

const port = 5000;

app.get("/", async (req, res) => {
  const todos = await db.allTodos();

  res.send("Hello World!" + JSON.stringify(todos));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
