import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./index.css";

export default function Convo() {
  const openingMessageRef = useRef(null);
  const [expandMessage, setExpandMessage] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="convo">
      <div className="convo-details">
        <div className="username">username</div>
        <div className="convo-name">Convo Name</div>
        <div
          ref={openingMessageRef}
          className="opening-message"
          onClick={() => setExpandMessage((prev) => !prev)}
          style={{
            maxHeight: `${
              expandMessage
                ? openingMessageRef.current.scrollHeight + "px"
                : "40px"
            }`,
          }}
        >
          Opening Message (Use Dropdown if message is big) Opening Message (Use
          Dropdown if message is big) Opening Message (Use Dropdown if message
          is big) Opening Message (Use Dropdown if message is big) Opening
          Message (Use Dropdown if message is big) Opening Message (Use Dropdown
          if message is big) Opening Message (Use Dropdown if message is big)
          Opening Message (Use Dropdown if message is big) Opening Message (Use
          Dropdown if message is big) Opening Message (Use Dropdown if message
          is big) Opening Message (Use Dropdown if message is big) Opening
          Message (Use Dropdown if message is big) Opening Message (Use Dropdown
          if message is big) Opening Message (Use Dropdown if message is big)
          Opening Message (Use Dropdown if message is big)
        </div>
      </div>
      {location.pathname === "/account" ? (
        <button className="join-button" onClick={() => navigate("/editconvo")}>
          Edit
        </button>
      ) : (
        <button className="join-button">Join</button>
      )}
    </div>
  );
}
