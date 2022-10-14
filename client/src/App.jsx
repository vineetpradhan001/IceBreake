import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./pages/home";
import CreateConvo from "./pages/createConvo";
import JoinConvo from "./pages/joinConvo";
import SearchUser from "./pages/searchUser";
import Account from "./pages/account";
import EditProfile from "./pages/editProfile";
import Signup from "./pages/signup";
import Login from "./pages/login";

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createconvo" element={<CreateConvo />} />
        <Route path="/joinconvo" element={<JoinConvo />} />
        <Route path="/searchuser" element={<SearchUser />} />
        <Route path="/user/:id" element={<Account />} />
        <Route path="/account" element={<Account />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </>
  );
}
