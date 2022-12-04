import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="signup">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <label>Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
