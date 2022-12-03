import React, { useEffect, useState } from "react";
import axios from "axios";
import TodosForm from "../components/TodosForm";
import TodoDetails from "../components/TodoDetails";

const Home = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get("/api/todos");
      setTodos(response.data);
    };
    getTodos();
  }, []);

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
