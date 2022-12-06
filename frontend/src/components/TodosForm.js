import React, { useState } from "react";
import axios from "axios";
import useTodosContext from "../hooks/useTodosContext";
import useAuthContext from "../hooks/useAuthContext";

const TodosForm = () => {
  const { user } = useAuthContext();
  const { dispatch } = useTodosContext();
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }

    try {
      const response = await axios.post(
        "/api/todos",
        { text },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      dispatch({ type: "ADD_TODO", payload: response.data });
      setText("");
      setError(null);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="what you have TODO?"
      />
      <button>Add</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default TodosForm;
