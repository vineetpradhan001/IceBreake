import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSignupMutation } from "../../features/authApi";

import "./index.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const [signupMutation, status] = useSignupMutation();
  useEffect(() => {
    status.isError && setError(status.error.data);
  }, [status.isError]);

  const signupHandler = (e) => {
    e.preventDefault();
    signupMutation({ username, email, password });
  };

  return (
    <div className="signup">
      <form onSubmit={signupHandler}>
        <div className="title">Signup</div>
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
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              error.username && setError((prev) => ({ ...prev, username: "" }));
            }}
          />
          <div className="error">{error.username}</div>
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
        <button>Signup</button>
      </form>
      <div className="hori-line"></div>
      <span className="navigate">
        Already have an account? <Link to="/login">Login</Link>
      </span>
    </div>
  );
}
