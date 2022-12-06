import React, { useEffect } from "react";
import axios from "axios";
import TodosForm from "../components/TodosForm";
import TodoDetails from "../components/TodoDetails";
import useTodosContext from "../hooks/useTodosContext";
import useAuthContext from "../hooks/useAuthContext";

const Home = () => {
  const { todos, dispatch } = useTodosContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Beared ${user.token}`,
      },
    };
    const getTodos = async () => {
      const response = await axios.get("/api/todos", config);
      dispatch({ type: "SET_TODOS", payload: response.data });
    };
    if (user) {
      getTodos();
    }
  }, [dispatch, user.token]);

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
