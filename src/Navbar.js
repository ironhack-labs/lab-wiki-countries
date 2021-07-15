import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        Home
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/countries">
              Countries<span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/details">
              Details
            </a>
          </li>
        </ul>
      </div>
    </nav>
    // <nav className="nav-style">
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/projects">Projects</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}
