import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../features/authApi";

import "./index.css";

export default function Home() {
  const navigate = useNavigate();
  const [logoutMutation] = useLogoutMutation();

  return (
    <div className="home">
      <button onClick={() => navigate("/createconvo")}>Create Convo</button>
      <button onClick={() => navigate("/joinconvo")}>Join Convo</button>
      <button onClick={() => navigate("/searchuser")}>Search User</button>
      <button onClick={() => navigate("/account")}>Account</button>
      <button onClick={() => logoutMutation()}>Logout</button>
    </div>
  );
}
