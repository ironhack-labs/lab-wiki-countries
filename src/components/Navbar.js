import React from 'react';
import { Link } from "react-router-dom";

function Navbarr() {
  return (
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <Link to='/' className="navbar-brand">LAB - WikiCountries</Link>
        </div>
    </nav>
  )
}

export default Navbarr;