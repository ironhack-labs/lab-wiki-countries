//Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navElements = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Countries",
      path: "/countries",
    },
  ];

  return (
    <nav>
      {navElements.map((e, i) => (
        <Link key={i + e.title} to={e.path}>
          {e.title}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
