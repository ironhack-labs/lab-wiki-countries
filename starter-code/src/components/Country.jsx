import React, { Component } from "react";
import countries from ".././countries";

import { Link } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

export default class CountryView extends Component {
  render() {
    return (
      <div>
        <Container>
          <ListGroup as="ul">
            {countries.map(country => (
              <ListGroup.Item>
                <Link to={`/country/${country.cca3}`} key={country.name.common}>
                  {country.name.common} {country.flag}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  }
}
