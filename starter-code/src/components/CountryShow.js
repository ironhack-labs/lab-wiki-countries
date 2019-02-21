import React, { Component } from "react";
import countriesList from "../countries.json";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

class CountryShow extends Component {
  render() {
    const { params } = this.props.match;

    // get param id and fetch the corresponding item
    const countryItem = countriesList.find(oneCountry => {
      return oneCountry.cca3 === params.countryId;
    });

    // get param id and fetch the corresponding item
    const countryName = countriesList.find(oneCountry => {
      return oneCountry.name === params.countryId;
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
                  {countryItem.borders.map(oneCountry => {
                    return (
                      <li key={oneCountry}>
                        <Link to={`/${oneCountry}`}>{countryName} foo</Link>
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
