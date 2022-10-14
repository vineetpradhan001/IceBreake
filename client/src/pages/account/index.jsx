import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Convo from "../../components/convo";

import "./index.css";

export default function Account() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="account">
      <div className="user">
        <img src="/man.png" alt="" />
        <div className="user-details">
          <span>username</span>
          <div className="follow-details">
            <div className="followers">
              <span>Followers</span>
              <span>500</span>
            </div>
            <div className="vert-line"></div>
            <div className="followers">
              <span>Following</span>
              <span>800</span>
            </div>
          </div>
        </div>
      </div>
      {location.pathname === "/account" ? (
        <button onClick={() => navigate("/editprofile")}>Edit Profile</button>
      ) : (
        <div className="button-group">
          <button>Follow</button>
          <button>Chat</button>
        </div>
      )}
      <div className="convo-list">
        {[...Array(20)].map((_data, index) => (
          <Convo key={index} />
        ))}
      </div>
    </div>
  );
}
