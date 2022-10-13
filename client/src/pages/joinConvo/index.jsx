import React, { useState } from "react";

import Convo from "../../components/convo";

import "./index.css";

export default function JoinConvo() {
  const [search, setSearch] = useState();

  return (
    <div className="join-convo">
      <input
        type="text"
        placeholder="Search Convo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="convo-list">
        {[...Array(20)].map((_data, index) => (
          <Convo key={index} />
        ))}
      </div>
    </div>
  );
}
