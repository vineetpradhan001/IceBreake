import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCurrentUserQuery,
  useUpdateUserMutation,
} from "../../features/authApi";

import "./index.css";

export default function EditProfile() {
  const [email, setEmail] = useState("username@email.com");
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("");
  const [currPassword, setCurrPassword] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const currentUser = useCurrentUserQuery();
  const [updateUser, updateUserStatus] = useUpdateUserMutation();

  useEffect(() => {
    if (currentUser.isSuccess) {
      setEmail(currentUser.data.email);
      setUsername(currentUser.data.username);
    }
  }, [currentUser.isSuccess]);
  useEffect(() => {
    updateUserStatus.isSuccess && navigate(-1, { replace: true });
  }, [updateUserStatus.isSuccess]);
  useEffect(() => {
    updateUserStatus.isError && setError(updateUserStatus.error.data);
  }, [updateUserStatus.isError]);

  return (
    <div className="create-convo edit-profile">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            error.email && setError((prev) => ({ ...prev, email: "" }));
          }}
          placeholder="email"
        />
        <div className="error">{error.email}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            error.username && setError((prev) => ({ ...prev, username: "" }));
          }}
          placeholder="username"
          minLength={4}
          maxLength={20}
        />
        <div className="error">{error.username}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            error.password && setError((prev) => ({ ...prev, password: "" }));
          }}
          placeholder="password"
          minLength={6}
        />
        <div className="error">{error.password}</div>
      </div>
      <span>To update your profile, enter your current password</span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="password"
          value={currPassword}
          onChange={(e) => {
            setCurrPassword(e.target.value);
            error.currPassword &&
              setError((prev) => ({ ...prev, currPassword: "" }));
          }}
          placeholder="current password"
        />
        <div className="error">{error.currPassword}</div>
      </div>
      <button
        onClick={() => updateUser({ email, username, password, currPassword })}
      >
        Update Profile
      </button>
    </div>
  );
}
