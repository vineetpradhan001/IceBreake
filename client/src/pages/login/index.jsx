import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../features/authApi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const [loginMutation, status] = useLoginMutation();

  useEffect(() => {
    status.isError && setError(status.error.data);
  }, [status.isError]);
  const submitHandler = (e) => {
    e.preventDefault();
    loginMutation({ email, password });
  };

  return (
    <div className="signup">
      <form onSubmit={submitHandler}>
        <div className="title">Login</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              error.email && setError((prev) => ({ ...prev, email: "" }));
            }}
          />
          <div className="error">{error.email}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              error.password && setError((prev) => ({ ...prev, password: "" }));
            }}
          />
          <div className="error">{error.password}</div>
        </div>
        <button>Login</button>
      </form>
      <div className="hori-line"></div>
      <span className="navigate">
        Doesn't have an account? <Link to="/signup">Signup</Link>
      </span>
    </div>
  );
}
