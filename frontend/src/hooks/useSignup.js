import { useState } from "react";
import useAuthContext from "./useAuthContext";
import axios from "axios";

const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);
    const data = { email, password };

    try {
      const response = await axios.post("/api/users/signup", data);

      const user = response.data;

      localStorage.setItem("user", JSON.stringify(user));

      dispatch({ type: "LOGIN", payload: user });
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.error);
      setIsLoading(false);
    }
  };

  return { signup, error, isLoading };
};

export default useSignup;
