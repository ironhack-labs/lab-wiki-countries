import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Table, Row, Col, Card } from "react-bootstrap";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import CountryDetail from "./components/CountryDetail";
import Countries from "./countries";

import CountryView from "./views/Country";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="dark" bg="primary">
        <Navbar.Brand href="#">WikiCountries</Navbar.Brand>
      </Navbar>
      <Table>
        <Row>
          <Col className="list-group">
            {Countries.map(country => (
              < Link to={`/country/${country.cca3}`} key={country.cca3}>
                <Card>{country.flag}{country.name.common}</Card>
              </Link>
            ))}
          </Col>
          <Col>
            <Switch>
              <Route path="/country/:id" component={CountryView} />
            </Switch>
          </Col>
        </Row>
      </Table>
    </div >
  );
}

export default App;
