import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./pages/home";

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <header onClick={() => navigate("/")}>
        <img src="/favicon.ico" alt="" />
        <span>IceBreaker</span>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
