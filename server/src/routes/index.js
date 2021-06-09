const addTodo = require("./addTodo");
const allTodos = require("./allTodos");
const setTodoStatus = require("./setTodoStatus");

module.exports = {
  todosRoutes: (app) => {
    addTodo(app);
    allTodos(app);
    setTodoStatus(app);
  },
};
