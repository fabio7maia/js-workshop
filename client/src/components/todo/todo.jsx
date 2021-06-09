import React from "react";

export const Todo = ({ id, todo, status, onChangeStatus }) => {
  const [statusState, setStatusStatus] = React.useState(status || 10);

  React.useEffect(() => {
    setStatusStatus(status);
  }, [status]);

  const handleOnChangeStatus = React.useCallback(
    (event) => {
      console.log("Todo > render > handleOnChangeStatus", { event });

      onChangeStatus({ id, status: Number(event.target.value) });
    },
    [id]
  );

  const bgColor = statusState === 10 ? "bg-yellow-400" : statusState === 20 ? "bg-purple-400" : "bg-green-400";

  console.log("Todo > render", { statusState, bgColor, todo, id });

  return (
    <div className={`flex justify-between my-2 p-2 flex-row w-full ${bgColor} bg- rounded-2xl text-xl text-white`}>
      <div className="flex">{todo}</div>
      <div className="flex pl-6 text-sm">
        <select
          className="rounded-lg p-1 text-gray-700 outline-none border-none"
          onChange={handleOnChangeStatus}
          value={statusState}
        >
          <option value="10">New</option>
          <option value="20">In Progress</option>
          <option value="30">Done</option>
        </select>
      </div>
    </div>
  );
};
