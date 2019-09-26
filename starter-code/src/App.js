import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import Countries from "./countries.json";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="dark" bg="primary">
        <Navbar.Brand href="#">WikiCountries</Navbar.Brand>
      </Navbar>
      <Switch>
        <div>
          <div>
            <div className="row">
              <div className="col-5">
                <div className="list-group">
                  <div>
                    {Countries.map(country => (
                      <Link to={`/${country.cca3}`} key={country.name.common}>
                        <div>
                          <Card>
                            {country.flag}
                            {country.name.common}
                          </Card>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-7">
                <Route path="/:id" component={CountryDetail} />
              </div>
            </div>
          </div>
        </div>
      </Switch>
    </div>
  );
}

export default App;
