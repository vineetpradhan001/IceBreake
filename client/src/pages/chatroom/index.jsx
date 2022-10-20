import React, { useState } from "react";
import socket from "../../socket";

import Textarea from "../../components/textarea";

import "./index.css";

export default function Chatroom() {
  const [message, setMessage] = useState("");

  return (
    <div className="chatroom">
      <div className="chatbox">
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hifdsuifhdsf vvxcvxv vdxvds sfsfkdsjb</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-send">Hi</div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
        <div className="chat-bubble chat-bubble-received">
          <span>Hi</span>
          <span>~vineet</span>
        </div>
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
        <span className="material-icons-outlined">send</span>
      </div>
    </div>
  );
}
