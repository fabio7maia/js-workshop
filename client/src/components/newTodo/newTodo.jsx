import React from "react";

export const NewTodo = ({ onClickAdd }) => {
  const inputRef = React.useRef();

  const handleOnClickAdd = React.useCallback((event) => {
    const value = inputRef.current.value;

    console.log("Todo > render > handleOnAddTodo", { value });

    if (value) {
      onClickAdd({ todo: value });
      inputRef.current.value = "";
    }
  }, []);

  return (
    <div className="flex justify-between flex-row">
      <input ref={inputRef} className="rounded-lg text-4xl w-full" />
      <button
        type="button"
        className="bg-blue-300 rounded-xl ml-5 sm:ml-10 p-3 w-3/12 font-bold"
        onClick={handleOnClickAdd}
      >
        Add
      </button>
    </div>
  );
};
