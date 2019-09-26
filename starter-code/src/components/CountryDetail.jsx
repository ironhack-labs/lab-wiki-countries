import React, { Component } from "react";
import countries from ".././countries";
import Country from "./Country";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
  }

  static getDerivedStateFromProps(props, state) {
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

              {country.borders.map(border => (
                <ListGroup.Item>
                  <Link to={`/country/${border}`} key={country.name.common}>
                    {border}
                  </Link>
                </ListGroup.Item>
              ))}
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}
