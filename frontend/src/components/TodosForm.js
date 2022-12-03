import React, { useState } from "react";
import axios from "axios";
import useTodosContext from "../hooks/useTodosContext";

const TodosForm = () => {
  const { dispatch } = useTodosContext();
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("/api/todos", { text });

    dispatch({ type: "ADD_TODO", payload: response.data });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="what you have TODO?"
      />
      <button>Add</button>
    </form>
  );
};

export default TodosForm;
