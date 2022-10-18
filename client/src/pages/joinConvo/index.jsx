import React, { useState, useEffect } from "react";
import { useGetConvosQuery } from "../../features/convoApi";
import { useVerifyJWTQuery } from "../../features/authApi";

import Convo from "../../components/convo";

import "./index.css";

export default function JoinConvo() {
  const [search, setSearch] = useState("");
  const getConvo = useGetConvosQuery({ title: search });
  const verifyJWT = useVerifyJWTQuery();

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
          c.createdBy === verifyJWT.data ? null : (
            <Convo key={index} convo={c} />
          )
        )}
      </div>
    </div>
  );
}
