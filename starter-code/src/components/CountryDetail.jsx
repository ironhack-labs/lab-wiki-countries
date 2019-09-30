import React, { Component } from "react";
import countries from "./../countries";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };

    this.cca3ToCountry = this.cca3ToCountry.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.cca3 !== this.props.match.params.cca3 ||
      !this.state.country
    ) {
      const country = countries.find(
        country => country.cca3 === this.props.match.params.cca3
      );
      this.setState({ country });
    }
  }

  //This is just to display the borders with the full name instead of the cca3 🙃
  cca3ToCountry(cca3) {
    return countries.find(country => country.cca3 === cca3);
  }

  render() {
    if (this.state.country) {
      return (
        <div>
          <h1>{this.state.country.name.common}</h1>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{this.state.country.capital.join(", ")}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{this.state.country.area}km2</td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {(this.state.country.borders.length !== 0 &&
                      this.state.country.borders.map(cca3 => (
                        <li key={cca3}>
                          <Link to={"/country/" + cca3}>
                            {" "}
                            {this.cca3ToCountry(cca3).name.common}
                          </Link>
                        </li>
                      ))) || <p>No borders</p>}
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    } else return <div>Countries loading...</div>;
  }
}
