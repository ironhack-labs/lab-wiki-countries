import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

let getCountryByccas3 = cca3 => {
  return countries.find(country => country.cca3 === cca3);
};
const countryDetails = props => {
  const country = getCountryByccas3(props.match.params.cca3);
  return (
    <div>
      <h3>{country.name.official}</h3>
      <hr />
      <h4>Capital:{country.capital}</h4>
      <hr />
      <h5>Area: {country.area}</h5>
      <hr />
      <h5>
        Borders:{" "}
        {country.borders
          .map(cca3 => getCountryByccas3(cca3))
          .map(c => c.name.official)}
      </h5>
      {/* <Link to="/projects">Back</Link> */}
    </div>
  );
};

export default countryDetails;
