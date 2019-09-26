import React, { Component } from "react";
import countries from ".././countries";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Country from "./Country";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    const code = props.match.params.code;
    const country = countries.find(item => item.cca3 === code);
    return {
      ...state,
      country
    };
  }

  render() {
    const code = this.props.match.params.code;
    const country = this.state.country;
    console.log(code);
    console.log(country);
    return (
      <div>
        <Row>
          <Col>
            <Country />
          </Col>
          <Col>
            <Container>
              <h1>
                {country.name.common} {country.flag}
              </h1>

              <p>Capital: {country.capital}</p>
              <p>Area: {country.area} km2</p>
              <p>Borders: {country.boarders}</p>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}
