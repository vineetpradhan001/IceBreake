import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteConvoMutation,
  useGetConvoQuery,
  useUpdateConvoMutation,
} from "../../features/convoApi";

import Textarea from "../../components/textarea";
import { useEffect } from "react";

export default function EditConvo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const getConvo = useGetConvoQuery(id);
  const [deleteConvo, deleteConvoStatus] = useDeleteConvoMutation();
  const [updateConvo, updateConvoStatus] = useUpdateConvoMutation();

  const [title, setTitle] = useState("");
  const [openingMessage, setOpeningMessage] = useState("");
  const [maxUsers, setMaxUsers] = useState("");

  useEffect(() => {
    if (getConvo.isSuccess) {
      setTitle(getConvo.data.title);
      setOpeningMessage(getConvo.data.openingMessage);
      setMaxUsers(getConvo.data.maxUsers);
    }
  }, [getConvo.isSuccess]);
  useEffect(() => {
    updateConvoStatus.isSuccess && navigate("/account", { replace: true });
  }, [updateConvoStatus.isSuccess]);
  useEffect(() => {
    deleteConvoStatus.isSuccess && navigate("/account", { replace: true });
  }, [deleteConvoStatus.isSuccess]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="create-convo" onSubmit={submitHandler}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Convo Title"
        maxLength={80}
      />
      <Textarea
        value={openingMessage}
        onChange={(val) => setOpeningMessage(val)}
        placeholder="Opening Message"
      />
      <input
        type="text"
        value={maxUsers}
        onChange={(e) =>
          parseInt(e.target.value)
            ? parseInt(e.target.value) <= 20 &&
              setMaxUsers(parseInt(e.target.value))
            : setMaxUsers("")
        }
        placeholder="Maximum Users (< 20 Users)"
      />
      <div className="button-group">
        <button onClick={() => deleteConvo(id)}>Delete Convo</button>
        <button
          onClick={() => updateConvo({ id, title, openingMessage, maxUsers })}
        >
          Edit Convo
        </button>
      </div>
    </form>
  );
}
