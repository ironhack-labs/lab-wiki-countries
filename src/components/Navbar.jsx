import React from "react";
import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";

function Navbar() {
  return (
    <>
      <nav>Wikicountries</nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default Navbar;
