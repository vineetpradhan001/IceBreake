import React, { useState } from "react";

import Textarea from "../../components/textarea";

import "./index.css";

export default function CreateConvo() {
  const [name, setName] = useState("");
  const [opening, setOpening] = useState("");
  const [maxUser, setMaxUser] = useState("");

  return (
    <form className="create-convo">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Convo Name"
        maxLength={80}
      />
      <Textarea
        value={opening}
        onChange={(val) => setOpening(val)}
        placeholder="Opening Message"
      />
      <input
        type="text"
        value={maxUser}
        onChange={(e) =>
          parseInt(e.target.value)
            ? parseInt(e.target.value) <= 20 &&
              setMaxUser(parseInt(e.target.value))
            : setMaxUser("")
        }
        placeholder="Maximum Users (< 20 Users)"
      />
      <button>Create Convo</button>
    </form>
  );
}
