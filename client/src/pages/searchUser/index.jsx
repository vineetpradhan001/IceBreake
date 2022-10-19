import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserQuery } from "../../features/authApi";
import { useGetUsersQuery } from "../../features/userApi";

import "./index.css";

export default function SearchUser() {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const currentUser = useCurrentUserQuery();
  const getUsers = useGetUsersQuery({ username: search });

  return (
    <div className="join-convo search-user">
      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="convo-list">
        {getUsers.data?.map((user, index) =>
          currentUser.data._id === user._id ? null : (
            <div
              key={index}
              className="user"
              onClick={() => navigate(`/user/${user._id}`)}
            >
              <img className="user-avatar" src="man.png" alt="" />
              <span className="username">{user.username}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
