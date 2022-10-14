import React, { useRef, useEffect } from "react";

import "./index.css";

export default function Textarea(props) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current.scrollHeight > ref.current.clientHeight) {
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, []);

  const changeHandler = (e) => {
    props.onChange(e.target.value);
    e.target.style.height = "auto";
    if (e.target.scrollHeight > e.target.clientHeight) {
      e.target.style.height = e.target.scrollHeight + "px";
    }
  };

  return (
    <textarea
      className="textarea"
      value={props.value}
      onChange={changeHandler}
      rows={1}
      placeholder={props.placeholder}
      ref={ref}
    />
  );
}
