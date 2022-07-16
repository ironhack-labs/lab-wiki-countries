import React from 'react'
// import { Link, NavLink } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
import Navbar1 from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Navbar() {
  return (

    <Navbar1 bg="primary" variant="primary" className="mb-3" sticky="top">
    <Container>
      <Navbar1.Brand href="/" className="d-inline-block align-top text-white">
        LAB - WikiCountries
      </Navbar1.Brand>
    </Container>
  </Navbar1>






    // <nav className="Navbar bg-primary">
    // <nav className="navbar bg-primary p-3">
    //   <div className="container-fluid">
    //     <a>
    //       <NavLink to='/' className={({ isActive }) => isActive ? "selected" : ""} >Wiki Countries</NavLink>
    //     </a>
    //   </div>
    // </nav>
  );
}

export default Navbar;