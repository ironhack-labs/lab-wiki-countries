import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Details = props => {
  const matchingCountry = props.countries.find(
    el => el.cca3 === props.match.params.cc
  );

  const mappedBorders = matchingCountry.borders.map(el => {
    const foundCountry = props.countries.find(country => country.cca3 === el);
    return (
      <li>
        <Link to={`/${el}`}>{foundCountry.name.common}</Link>
      </li>
    );
  });

  return (
    <div className="col-6 details">
      <div>
        <h1>{matchingCountry.name.common}</h1>
        <hr />
        <h4>Capital: {matchingCountry.capital[0]}</h4>
        <hr />
        <h4>
          Area: {matchingCountry.area} km
          <sup>2</sup>
        </h4>
        <br />
        <ul>{mappedBorders}</ul>
      </div>
    </div>
  );
};

export default withRouter(Details);
