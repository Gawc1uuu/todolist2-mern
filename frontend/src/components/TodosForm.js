import React, { useState } from "react";
import axios from "axios";

const TodosForm = () => {
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { text };
    const response = await axios.post("/api/todos", { text });

    console.log(response.data);
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
