import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetConvosQuery } from "../../features/convoApi";
import { useCurrentUserQuery } from "../../features/authApi";
import { useGetUserQuery } from "../../features/userApi";

import Convo from "../../components/convo";

import "./index.css";

export default function Account() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();

  const user =
    pathname === "/account" ? useCurrentUserQuery() : useGetUserQuery(id);
  const getConvos = useGetConvosQuery({ createdBy: user.data?._id });

  return (
    <div className="account">
      <div className="user">
        <img src="/man.png" alt="" />
        <div className="user-details">
          <span>{user.data?.username}</span>
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
      {pathname === "/account" ? (
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
        {getConvos.data?.map((c, index) => (
          <Convo key={index} convo={c} />
        ))}
      </div>
    </div>
  );
}
