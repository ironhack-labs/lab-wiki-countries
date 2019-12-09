import React, { Component } from "react";
import "./App.css";

import countries from "./countries.json";

import CountryDetail from "./components/CountryDetail";
import CountryList from "./components/CountryList";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand className="NavTitle">WikiCountries</Navbar.Brand>
        </Navbar>
        <Container fluid="true" className="App">
          <Row fluid="true">
            <Col sm={5} className="ScrollableElements CountryListCol">
              <Card>
                <ListGroup variant="flush">
                  {countries.map(country => {
                    return (
                      <CountryList
                        country={country}
                        key={country.name.official}
                      />
                    );
                  })}
                </ListGroup>
              </Card>
            </Col>
            <Col sm={7} className="ScrollableElements CountryDetailCol">
              {countries.map(country => {
                return (
                  <CountryDetail
                    country={country}
                    key={country.name.official}
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
