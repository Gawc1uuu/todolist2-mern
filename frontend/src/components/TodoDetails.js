import React from "react";
import axios from "axios";
import deleteIcon from "../assets/delete.svg";
import useTodosContext from "../hooks/useTodosContext";
import { format } from "date-fns";
import useAuthContext from "../hooks/useAuthContext";
const colors = [
  "ffc6efee",
  "ffe2e4ee",
  "ffd6daee",
  "fff4dcee",
  "dffff1ee",
  "d3f4ffee",
  "eee1ffee",
];

const TodoDetails = ({ todo }) => {
  const { user } = useAuthContext();
  const { dispatch } = useTodosContext();
  const handleClick = async (e) => {
    const response = await axios.delete("/api/todos/" + todo._id, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch({ type: "DELETE_TODO", payload: response.data._id });
  };

  return (
    <div
      className="single-todo"
      style={{
        backgroundColor: `#${
          colors[Math.floor(Math.random() * colors.length)]
        }`,
      }}
    >
      <p>{todo.text}</p>
      <p>{format(new Date(todo.createdAt), "dd/MM/yyyy")}</p>
      <p className="pin"></p>
      <img
        onClick={handleClick}
        src={deleteIcon}
        className="delete-icon"
        alt="trashcan"
      />
    </div>
  );
};

export default TodoDetails;
