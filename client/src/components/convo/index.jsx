import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./index.css";

export default function Convo(props) {
  const openingMessageRef = useRef(null);
  const [expandMessage, setExpandMessage] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="convo">
      <div className="convo-details">
        <div className="username">{props.convo.createdBy}</div>
        <div className="convo-name">{props.convo.title}</div>
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
          {props.convo.openingMessage}
        </div>
      </div>
      {location.pathname === "/account" ? (
        <button
          className="join-button"
          onClick={() => navigate(`/editconvo/${props.convo._id}`)}
        >
          Edit
        </button>
      ) : (
        <button
          className="join-button"
          onClick={() => navigate(`/chat/${props.convo._id}`)}
        >
          Join
        </button>
      )}
    </div>
  );
}
