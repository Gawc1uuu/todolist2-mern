import React from "react";
import axios from "axios";
import deleteIcon from "../assets/delete.svg";
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
  const handleClick = (e) => {
    const response = axios.delete("/api/todos/" + todo._id);
    console.log(response);
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
      <p>{todo.createdAt}</p>
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
