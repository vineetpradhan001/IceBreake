import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

export default function Signup() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="signup">
      <form>
        <div className="title">Signup</div>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Signup</button>
      </form>
      <div className="hori-line"></div>
      <span className="navigate">
        Already have an account? <Link to="/login">Login</Link>
      </span>
    </div>
  );
}
