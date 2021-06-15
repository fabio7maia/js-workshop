import React from "react";
import { useFetchAddTodo, useFetchAllTodos, useFetchSetTodoStatus } from "./services";
import { NewTodo, Todo } from "./components";

export const App = () => {
  const addTodo = useFetchAddTodo();
  const allTodos = useFetchAllTodos();
  const setTodoStatus = useFetchSetTodoStatus();

  const [todos, setTodos] = React.useState([]);
  const [error, setError] = React.useState();

  const handleSuccessResponse = React.useCallback(({ error, data }) => {
    data.sort((a, b) => (a.status > b.status ? 1 : a.status < b.status ? -1 : 0));

    setTodos([...data] || []);
    setError(error);
  }, []);

  React.useEffect(() => {
    allTodos()
      .then(handleSuccessResponse)
      .catch((err) => setError(err.message));
  }, []);

  const handleOnClickAdd = React.useCallback(({ todo }) => {
    console.log("Todo > render > handleOnAddTodo", { todo });

    addTodo({ todo })
      .then(handleSuccessResponse)
      .catch((err) => setError(err.message));
  }, []);

  const handleOnChangeStatus = React.useCallback(({ id, status }) => {
    console.log("Todo > render > handleOnChangeStatus", { id, status });

    setTodoStatus({ id, status })
      .then(handleSuccessResponse)
      .catch((err) => setError(err.message));
  }, []);

  console.log("App > render", { todos, error });

  return (
    <div className="bg-gray-200 min-h-screen min-w-screen overflow-y-hidden p-5 sm:p-10">
      <div className="text-center flex items-center justify-center font-black text-5xl text-indigo-600">Todo App</div>
      <div className="pt-20">
        <NewTodo onClickAdd={handleOnClickAdd} />
      </div>
      <div className="pt-8"></div>
      {error && (
        <div className="rounded-xl bg-red-700 my-5 p-2 text-white font-bold flex items-center justify-center">
          {error}
        </div>
      )}
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} onChangeStatus={handleOnChangeStatus} />
        ))}
      </div>
    </div>
  );
};
