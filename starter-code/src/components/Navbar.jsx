import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar bg-info col-12'>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          Wiki Countries
        </Link>
      </div>
    );
  }
}
