import React, { useState } from "react";

import "./index.css";

export default function SearchUser() {
  const [search, setSearch] = useState();

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
          <div key={index} className="user">
            <img className="user-avatar" src="man.png" alt="" />
            <span className="username">username</span>
          </div>
        ))}
      </div>
    </div>
  );
}
