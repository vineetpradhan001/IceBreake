import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./pages/home";
import CreateConvo from "./pages/createConvo";

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <img src="/favicon.ico" alt="" onClick={() => navigate("/")} />
        <span onClick={() => navigate("/")}>IceBreaker</span>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createconvo" element={<CreateConvo />} />
      </Routes>
    </>
  );
}