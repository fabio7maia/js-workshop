import { apiConfigs } from "../../configs";

export const useFetchAddTodo = () => {
  return (input) =>
    fetch(`${apiConfigs.url}todo`, {
      method: "post",
      body: JSON.stringify(input),
      headers: { "content-type": "application/json" },
    }).then((res) => res.json());
};
