import React from "react";
import { useState } from "react";

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
        maxLength={60}
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
            ? setMaxUser(parseInt(e.target.value))
            : setMaxUser("")
        }
        placeholder="Maximum Users (< 20 Users)"
      />
      <button>Create Convo</button>
    </form>
  );
}
