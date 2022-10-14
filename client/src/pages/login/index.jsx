import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="signup">
      <form>
        <div className="title">Login</div>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <div className="hori-line"></div>
      <span className="navigate">
        Doesn't have an account? <Link to="/signup">Signup</Link>
      </span>
    </div>
  );
}
