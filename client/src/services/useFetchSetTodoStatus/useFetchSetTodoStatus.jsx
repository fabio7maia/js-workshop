import { apiConfigs } from "../../configs";

export const useFetchSetTodoStatus = () => {
  return (input) =>
    fetch(`${apiConfigs.url}status`, {
      method: "post",
      body: JSON.stringify(input),
      headers: { "content-type": "application/json" },
    }).then((res) => res.json());
};
