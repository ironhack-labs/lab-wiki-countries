import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";
const countryDetailStyles = {
  textAlign: "left"
};

class CountryDetail extends React.Component {
  render() {
    console.log(this.props.match.params);
    // console.log(countries);
    let countryToMatch = {};
    for (let i = 0; i < countries.length; i++) {
      if (this.props.match.params.cca3 == countries[i].cca3) {
        countryToMatch = countries[i];
      }

      //   console.log(countries[i].cca3);
    }
    console.log(countryToMatch);
    //JS find method or loop

    return (
      <div className="col-7" style={countryDetailStyles}>
        <h1>{countryToMatch.name.common}</h1>
        <table className="table">
          <thead />
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{countryToMatch.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryToMatch.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countryToMatch.borders.map(border => {
                    let borderCountryToMatch = {};
                    for (let i = 0; i < countries.length; i++) {
                      if (border == countries[i].cca3) {
                        borderCountryToMatch = countries[i];
                      }
                    }
                    return (
                      <li>
                        <Link to={`/country/${borderCountryToMatch.cca3}`}>
                          {borderCountryToMatch.name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
