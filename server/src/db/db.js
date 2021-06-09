var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./src/db/todoApp.db");

db.serialize(function () {
  db.run("CREATE TABLE IF NOT EXISTS todos (todo TEXT, status INTEGER)");

  db.get("SELECT count(*) numberOfRecords FROM todos", (err, row) => {
    console.log(row, err);

    if (err) {
      console.log(`ERROR: ${err}`);
      return;
    }

    if (row.numberOfRecords === 0) {
      var stmt = db.prepare("INSERT INTO todos VALUES (?, ?)");

      for (var i = 0; i < 3; i++) {
        stmt.run([`Todo ${i}`, 1]);
      }

      stmt.finalize();
    }

    db.each("SELECT rowid AS id, todo, status FROM todos", function (err, row) {
      if (err) {
        console.log(`ERROR: ${err}`);
        return;
      }

      console.log(`TODO: ${row.id} : ${row.todo} [${row.status}]`);
    });
  });
});

const allTodos = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT rowid AS id, todo, status FROM todos", (err, res) => {
      console.log(`getTodos > ${JSON.stringify(res)} [${JSON.stringify(err)}]`);

      if (err) {
        console.log(`ERROR: ${err}`);
        reject(err);
      }

      resolve(res);
    });
  });
};

const disconnect = () => {
  db.close();
};

module.exports = {
  allTodos,
  disconnect,
};
