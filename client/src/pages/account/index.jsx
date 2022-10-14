import React from "react";

import Convo from "../../components/convo";

import "./index.css";

export default function Account() {
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
      <div className="convo-list">
        {[...Array(20)].map((_data, index) => (
          <Convo key={index} />
        ))}
      </div>
    </div>
  );
}
