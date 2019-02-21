import React, { Component } from "react";
import countriesList from "../countries.json";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function convertToName(currentCountryCode) {
  const match = countriesList.find(oneCountry => {
    return oneCountry.cca3 === currentCountryCode;
  });
  return match.name.common;
}
class CountryShow extends Component {
  render() {
    // retrieve current url parameter
    const { params } = this.props.match;

    // using it to fetch the corresponding full object (same for DB QUERY)
    const countryItem = countriesList.find(oneCountry => {
      return oneCountry.cca3 === params.countryId;
    });

    return (
      <Col sm={5} className="country-list-panel">
        <h1>{countryItem.name.common}</h1>
        <Table>
          <thead />
          <tbody>
            <tr>
              <td className="country-list-show-capital">Capital</td>
              <td>{countryItem.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryItem.area} (km)
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul className="list-unstyled">
                  {/* turn related countries array into clickable links */}
                  {countryItem.borders.map(oneCountry => {
                    return (
                      <li key={oneCountry}>
                        <Link to={`/${oneCountry}`}>
                          {/* find country names with respective countryIds */}
                          {convertToName(oneCountry)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    );
  } // end of render
}

export default CountryShow;
