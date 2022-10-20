import React, { useState } from "react";

import Textarea from "../../components/textarea";

import "./index.css";

export default function Chatroom() {
  const [message, setMessage] = useState("");

  return (
    <div className="chatroom">
      <div className="chatbox">
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-received">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
      </div>
      <div className="chatbar">
        <Textarea
          value={message}
          onChange={(val) => setMessage(val)}
          placeholder="Send Message"
        />
        <span class="material-icons-outlined">send</span>
      </div>
    </div>
  );
}
