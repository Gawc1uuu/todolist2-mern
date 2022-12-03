import React, { useEffect } from "react";
import axios from "axios";
import TodosForm from "../components/TodosForm";
import TodoDetails from "../components/TodoDetails";
import useTodosContext from "../hooks/useTodosContext";

const Home = () => {
  const { todos, dispatch } = useTodosContext();

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get("/api/todos");
      dispatch({ type: "SET_TODOS", payload: response.data });
    };
    getTodos();
  }, [dispatch]);

  return (
    <div className="main-container">
      <div className="form-container">
        <TodosForm />
      </div>
      <div className="todos-container">
        {todos &&
          todos.map((todo) => <TodoDetails key={todo._id} todo={todo} />)}
      </div>
    </div>
  );
};

export default Home;
