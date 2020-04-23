import React from "react";

const Header = () => {
  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">
          WikiCountries
        </a>
      </div>
    </nav>
  );
};

export default Header;
