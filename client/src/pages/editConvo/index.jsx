import React, { useState } from "react";

import Textarea from "../../components/textarea";

export default function EditConvo() {
  const [name, setName] = useState("Convo Name");
  const [opening, setOpening] =
    useState(`Opening Message (Use Dropdown if message is big) Opening Message (Use
    Dropdown if message is big) Opening Message (Use Dropdown if message
    is big) Opening Message (Use Dropdown if message is big) Opening
    Message (Use Dropdown if message is big) Opening Message (Use Dropdown
    if message is big) Opening Message (Use Dropdown if message is big)
    Opening Message (Use Dropdown if message is big) Opening Message (Use
    Dropdown if message is big) Opening Message (Use Dropdown if message
    is big) Opening Message (Use Dropdown if message is big) Opening
    Message (Use Dropdown if message is big) Opening Message (Use Dropdown
    if message is big) Opening Message (Use Dropdown if message is big)
    Opening Message (Use Dropdown if message is big)`);
  const [maxUser, setMaxUser] = useState("15");

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
      <button>Edit Convo</button>
    </form>
  );
}
