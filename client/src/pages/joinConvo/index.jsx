import React, { useState, useEffect } from "react";
import { useGetConvosQuery } from "../../features/convoApi";
import { useCurrentUserQuery } from "../../features/authApi";

import Convo from "../../components/convo";

import "./index.css";

export default function JoinConvo() {
  const [search, setSearch] = useState("");
  const getConvo = useGetConvosQuery({ title: search });
  const currentUser = useCurrentUserQuery();

  return (
    <div className="join-convo">
      <input
        type="text"
        placeholder="Search Convo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="convo-list">
        {getConvo.data?.map((c, index) =>
          c.createdBy === currentUser.data._id ? null : (
            <Convo key={index} convo={c} />
          )
        )}
      </div>
    </div>
  );
}
