import React from "react";
import countries from "../countries";
import { Link } from "react-router-dom";

const CountryDetail = props => {
  const id = props.match.params.id || null;
  // console.log(id);

  const foundCountry = countries.find(el => {
    // console.log(countries);
    return el.cca3 === id;
  });
  // console.log(foundCountry);

  const countryBorders = foundCountry.borders;
  console.log(countryBorders);

  const specificBorders = countryBorders.map(mappedBorder => {
    const borderCountry = countries.find(country => {
      return country.cca3 === mappedBorder;
    });
    return (
      <Link
        to={`/countrydetail/${borderCountry.cca3}`}
        key={borderCountry.cca3}
      >
        <li>{borderCountry.name.common}</li>
      </Link>
    );
  });

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{foundCountry.capital.join()}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{specificBorders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
