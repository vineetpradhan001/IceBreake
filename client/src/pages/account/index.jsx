import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetConvosQuery } from "../../features/convoApi";
import { useCurrentUserQuery } from "../../features/authApi";

import Convo from "../../components/convo";

import "./index.css";

export default function Account() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentUser = useCurrentUserQuery();
  const getConvo = useGetConvosQuery({ createdBy: currentUser.data?._id });

  return (
    <div className="account">
      <div className="user">
        <img src="/man.png" alt="" />
        <div className="user-details">
          <span>{currentUser.data?.username}</span>
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
        <div className="button-group">
          <button onClick={() => navigate("/editprofile")}>Edit Profile</button>
        </div>
      ) : (
        <div className="button-group">
          <button>Follow</button>
          <button>Chat</button>
        </div>
      )}
      <div className="hori-line"></div>
      <div className="convo-list">
        {getConvo.data?.map((c, index) => (
          <Convo key={index} convo={c} />
        ))}
      </div>
    </div>
  );
}
