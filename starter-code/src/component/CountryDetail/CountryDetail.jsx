import React from "react";
// import { Link, Switch, Route } from "react-router-dom";

function CountryDetail(props) {
  let theCountry = props.listOfCountries.find(country => {
    return country.cca3 === props.match.params.id;
  });

  function borderCountries() {
    if (theCountry.borders == "") {
      //   console.log("Nothing on the border");
    } else {
      //   console.log("Something on the Border");
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <h1>{theCountry.name.common}</h1>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Capital</th>
            <td>{theCountry.capital}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{theCountry.area}</td>
          </tr>
          <tr>
            <th>Borders</th>
            <td>
              {theCountry.borders}
              {borderCountries()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
