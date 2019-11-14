import React from "react";
import { Link } from "react-router-dom";

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

  //   let eachBorderCountry = props.listOfCountries.find(country => {
  //     return country.cca3 === "FRA";
  //   });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td colSpan="2">
              <h1>
                <img
                  src={
                    "https://www.countryflags.io/" +
                    theCountry.cca2 +
                    "/flat/64.png"
                  }
                  alt={theCountry.name.common}
                />{" "}
                {theCountry.name.common}
              </h1>
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
            <td>{theCountry.area} km2</td>
          </tr>
          <tr>
            <th>Borders</th>
            <td>
              {showBorderCountries()}
              {/* {eachBorderCountry.name} */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
