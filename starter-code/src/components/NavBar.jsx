import React, { useContext } from "react";
import { CountryContext } from "../context/countries.context";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { getCountry } = useContext(CountryContext);
  const firstCountry = getCountry("ABW");

  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand" to={firstCountry.cca3}>
          WikiCountries
        </Link>
      </div>
    </nav>
  );
};
