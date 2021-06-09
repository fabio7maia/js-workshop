import { apiConfigs } from "../../configs";

export const useFetchAllTodos = () => {
  return () =>
    fetch(`${apiConfigs.url}todos`, { method: "get", headers: { "content-type": "application/json" } }).then((res) =>
      res.json()
    );
};
