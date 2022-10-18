import React, { useEffect, useState } from "react";
import { useCreateConvoMutation } from "../../features/convoApi";
import { useVerifyJWTQuery } from "../../features/authApi";
import { useNavigate } from "react-router-dom";

import Textarea from "../../components/textarea";

import "./index.css";

export default function CreateConvo() {
  const [title, setTitle] = useState("");
  const [openingMessage, setOpeningMessage] = useState("");
  const [maxUsers, setMaxUsers] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const [createConvo, status] = useCreateConvoMutation();
  const verifyJWT = useVerifyJWTQuery();

  useEffect(() => {
    status.isError && setError(status.error.data);
  }, [status.isError]);
  useEffect(() => {
    status.isSuccess && navigate(`/chat/${status.data}`, { replace: true });
  }, [status.isSuccess]);

  const submitHandler = (e) => {
    e.preventDefault();
    createConvo({
      title,
      openingMessage,
      maxUsers,
      createdBy: verifyJWT.data,
    });
  };

  return (
    <form className="create-convo" onSubmit={submitHandler}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            error.title && setError((prev) => ({ ...prev, title: "" }));
          }}
          placeholder="Convo Title"
          maxLength={80}
        />
        <div className="error">{error.title}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Textarea
          value={openingMessage}
          onChange={(val) => {
            setOpeningMessage(val);
            error.openingMessage &&
              setError((prev) => ({ ...prev, openingMessage: "" }));
          }}
          placeholder="Opening Message"
        />
        <div className="error">{error.openingMessage}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          value={maxUsers}
          onChange={(e) => {
            if (parseInt(e.target.value)) {
              if (parseInt(e.target.value) <= 20) {
                setMaxUsers(parseInt(e.target.value));
                error.maxUsers &&
                  setError((prev) => ({ ...prev, maxUsers: "" }));
              }
            } else {
              setMaxUsers("");
            }
          }}
          placeholder="Maximum Users (< 20 Users)"
        />
        <div className="error">{error.maxUsers}</div>
      </div>
      <div className="button-group">
        <button>Create Convo</button>
      </div>
    </form>
  );
}
