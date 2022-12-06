import useAuthContext from "./useAuthContext";
import useTodosContext from "./useTodosContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchTodos } = useTodosContext();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    dispatchTodos({ type: "SET_TODOS", payload: null });
  };
  return { logout };
};

export default useLogout;
