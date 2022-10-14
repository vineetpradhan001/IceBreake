import React from "react";
import { useState } from "react";

import "./index.css";

export default function EditProfile() {
  const [email, setEmail] = useState("username@email.com");
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("");
  const [currPassword, setCurrPassword] = useState("");

  return (
    <form className="create-convo edit-profile">
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        minLength={4}
        maxLength={20}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        minLength={6}
      />
      <span>To update your profile, enter your current password</span>
      <input
        type="password"
        value={currPassword}
        onChange={(e) => setCurrPassword(e.target.value)}
        placeholder="current password"
      />
      <button>Update Profile</button>
    </form>
  );
}
