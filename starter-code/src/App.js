// Core components
import React, { Component } from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";

// Data
import countriesList from "./countries.json";
import "./App.css";

// NPM Components
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

// App Components
import CountryShow from "./components/CountryShow.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" className="mb-3">
          <Container>
            <Navbar.Brand>
              <NavLink to="/">WikiCountries</NavLink>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col sm={5} className="country-list-panel">
              <ListGroup>
                {countriesList.map(oneCountry => {
                  return (
                    <ListGroup.Item key={oneCountry.cca3}>
                      <Link to={`/${oneCountry.cca3}`}>
                        {oneCountry.name.common}
                      </Link>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Col>
            <Switch>
              {/* homepage exact is mandatory */}
              <Route path="/:countryId" component={CountryShow} />
            </Switch>

            {/* <CountryShow /> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
