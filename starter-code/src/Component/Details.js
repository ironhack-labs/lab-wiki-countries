import React from "react";
import Countries from "../countries.json";
import { Link } from "react-router-dom";

const Details = props => {
  const countryId = props.match.params.id;

  let selectedCountry = Countries.find(el => el.cca3 === countryId);

  let borderCountries = selectedCountry.borders.map((el, index) => {
    return (
      <li key={index}>
        <Link key={index} to={`/${el.cca3}`}>
          {el}
        </Link>
      </li>
    );
  });

  return (
    <div className="col-7">
      <h1>{selectedCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{selectedCountry.capital}</td>
          </tr>

          <tr>
            <td>Area</td>

            <td>
              {selectedCountry.area} km<sup>2</sup>
            </td>
          </tr>

          <tr>
            <td>Borders</td>

            <td>
              <ul>{borderCountries}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
//
