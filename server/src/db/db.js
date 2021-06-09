const uuid = require("uuid");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./src/db/todoApp.db");

db.serialize(function () {
  db.run("CREATE TABLE IF NOT EXISTS todos (id TEXT, todo TEXT, status INTEGER)");

  db.get("SELECT count(*) numberOfRecords FROM todos", (err, row) => {
    console.log(row, err);

    if (err) {
      console.log(`ERROR: ${err}`);
      return;
    }

    if (row.numberOfRecords === 0) {
      var stmt = db.prepare("INSERT INTO todos VALUES (?, ?, ?)");

      for (var i = 0; i < 3; i++) {
        stmt.run([uuid.v4(), `Todo ${i}`, 10]);
      }

      stmt.finalize();
    }

    db.each("SELECT id, todo, status FROM todos", function (err, row) {
      if (err) {
        console.log(`ERROR: ${err}`);
        return;
      }

      console.log(`TODO: ${row.id} : ${row.todo} [${row.status}]`);
    });
  });
});

const addTodo = ({ todo }) => {
  const stmt = db.prepare("INSERT INTO todos VALUES (?, ?, ?)");

  stmt.run([uuid.v4(), todo, 10]);

  stmt.finalize();

  return allTodos();
};

const allTodos = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT id, todo, status FROM todos", (err, res) => {
      console.log(`allTodos > ${JSON.stringify(res)} [${JSON.stringify(err)}]`);

      if (err) {
        console.log(`ERROR: ${err}`);
        reject(err);
      }

      resolve(res);
    });
  });
};

const getTodo = ({ id }) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare("SELECT id, todo, status FROM todos WHERE id = ?");

    stmt.get([id], (err, res) => {
      console.log(`getTodo > ${JSON.stringify(res)} [${JSON.stringify(err)}]`);

      if (err) {
        console.log(`ERROR: ${err}`);
        reject(err);
      }

      resolve(res);
    });

    stmt.finalize();
  });
};

const setTodoStatus = ({ id, status }) => {
  const stmt = db.prepare("UPDATE todos SET status = ? WHERE id = ?");

  stmt.run([status, id]);

  stmt.finalize();

  return allTodos();
};

const disconnect = () => {
  db.close();
};

module.exports = {
  addTodo,
  allTodos,
  getTodo,
  setTodoStatus,
  disconnect,
};
