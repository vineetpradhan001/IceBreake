import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

export default function SearchUser() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  return (
    <div className="join-convo search-user">
      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="convo-list">
        {[...Array(20)].map((_data, index) => (
          <div
            key={index}
            className="user"
            onClick={() => navigate(`/user/${index}`)}
          >
            <img className="user-avatar" src="man.png" alt="" />
            <span className="username">username</span>
          </div>
        ))}
      </div>
    </div>
  );
}
