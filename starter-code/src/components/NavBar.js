import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <section className="uk-section uk-section-primary uk-section-xsmall uk-padding-remove-vertical">
    <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <Link to="/">WikiCountries</Link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
);

export default NavBar;
