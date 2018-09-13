import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const CountryDetails = props => {
  const shownCountry = props.countryData.find(country => {
    return country.cca3 === props.match.params.cc;
  });

  if (!shownCountry) return <div />;

  const borders = shownCountry.borders.map(borderingCountry => {
    const fullCountry = props.countryData.find(country => {
      return country.cca3 === borderingCountry;
    });
    return (
      <li>
        <Link to={`/${fullCountry.cca3}`}> {fullCountry.name.common}</Link>
      </li>
    );
  });
  console.log(borders);
  return (
    <div>
      <h1>{shownCountry.name.common}</h1>
      <p>Capital: {shownCountry.capital}</p>
      <p>Area: {shownCountry.area} km&sup2;</p>
      <p>Borders: </p>
      <ul>{borders}</ul>
    </div>
  );
};

export default withRouter(CountryDetails);
