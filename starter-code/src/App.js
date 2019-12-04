import React from "react";
import logo from "./logo.svg";
import "./App.css";
import countries from "./countries.json";
import { Link } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import myFuckingC from "./components/CountryDetail";

function App() {
  return (
    <>
      <div id="root">
        <div>
          <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
              <a class="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div class="container">
            <div class="row">
              <div class="col-5">
                <div class="list-group">
                  {countries.map((elm, idx) => (
                    <Link
                      className="list-group-item list-group-item-action"
                      to={elm.cca3}
                    >
                      {elm.flag} {elm.name.official}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Route exact path="/:cca3" component={myFuckingC} />
      </div>
    </>
  );
}

export default App;
