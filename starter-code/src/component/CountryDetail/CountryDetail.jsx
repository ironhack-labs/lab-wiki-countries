import React from "react";
import { Link, Switch, Route } from "react-router-dom";

function CountryDetail(props) {
  let theCountry = props.listOfCountries.find(country => {
    return country.cca3 === props.match.params.id;
  });

  let borderCountries;
  function showBorderCountries() {
    if (theCountry.borders === "") {
      //   console.log("Nothing on the border");
    } else {
      //   console.log("Something on the Border");
      borderCountries = theCountry.borders.map((eachCountry, i) => {
        return (
          <li key={i}>
            <Link to={"/countrydetail/" + eachCountry}>{eachCountry}</Link>
          </li>
        );
      });
    }
    return borderCountries;
  }

  let borderCountriesDetails = () => {
    if (borderCountries === props.cca3) {
      console.log(props.name.common);
    }
  };

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
            <td>{showBorderCountries()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
