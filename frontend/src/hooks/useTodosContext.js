import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

const useTodosContext = () => {
  const context = useContext(TodosContext);

  return context;
};

export default useTodosContext;
