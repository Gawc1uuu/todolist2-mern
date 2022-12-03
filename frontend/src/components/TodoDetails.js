import React from "react";
const colors = [
  "ffc6ef95",
  "ffe2e495",
  "ffd6da95",
  "fff4dc95",
  "dffff195",
  "d3f4ff95",
  "eee1ff95",
];

const TodoDetails = ({ todo }) => {
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
    </div>
  );
};

export default TodoDetails;
