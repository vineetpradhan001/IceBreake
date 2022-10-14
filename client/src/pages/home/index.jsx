import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <button onClick={() => navigate("/createconvo")}>Create Convo</button>
      <button onClick={() => navigate("/joinconvo")}>Join Convo</button>
      <button onClick={() => navigate("/searchuser")}>Search User</button>
      <button>Account</button>
    </div>
  );
}
