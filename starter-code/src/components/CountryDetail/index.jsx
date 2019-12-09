import React, { Component } from "react";
import "./style.css";

import Table from "react-bootstrap/Table";

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const country = this.props.country;
    const borders = this.props.country.borders;

    return (
      <div>
        <h1>{country.name.official}</h1>
        <Table variant="flush">
          <tbody>
            <tr>
              <td style={{width: "30%" }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km<sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul className="list-unstyled">
                  {borders.map(border => {
                  return <li><a href={border}>{border}{/* {console.log(country.borders)} */}</a></li>;
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CountryDetail;
