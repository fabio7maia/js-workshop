const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const packageJson = require("../package.json");
const db = require("./db");
const routes = require("./routes");

process.on("exit", function () {
  // Add shutdown logic here.
  db.disconnect();
});

const port = 5000;

app.get("/", async (req, res) => {
  res.send(`Todo App Server v.${packageJson.version}`);
});

routes.todosRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
