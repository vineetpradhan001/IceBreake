import React, { useRef, useState } from "react";

import "./index.css";

export default function Convo() {
  const openingMessageRef = useRef(null);
  const [expandMessage, setExpandMessage] = useState(0);

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
      <button className="join-button">Join</button>
    </div>
  );
}
