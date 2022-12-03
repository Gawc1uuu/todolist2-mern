import React, { createContext, useReducer } from "react";

export const TodosContext = createContext();

const todosReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        todos: action.payload,
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case "ADD_TODO":
      console.log(state.todos);
      return {
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

const TodosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, {
    todos: null,
  });

  return (
    <TodosContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
