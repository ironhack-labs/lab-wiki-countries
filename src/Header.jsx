import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          WikiCountries
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
