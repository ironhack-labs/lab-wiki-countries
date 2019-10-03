import React from "react";
import "./App.css";
import CountryDetail from "./CountryDetail";
import { Link, Switch, Route } from "react-router-dom";
import countries from "./countries.json";

function App() {
  // function iterate() {
    let iterate = () =>{
    let countryArr = countries.map(eachCountry => {
      return (
        <li className="card">
          <Link to={`/CountryDetail/${eachCountry.cca3}`}>
            {" "}
            {eachCountry.name.common}
          </Link>
        </li>
      );
    });
    return countryArr;
  }

  return (
    <div className="App">
      <div>
        <nav className="navBar">Wiki Countries</nav>
        <div className="flexed">
          <div className="col-6">
            <ul>{iterate()}</ul>
          </div>
          <div className="col-6">
            <Switch>
              <Route path="/CountryDetail/:id" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
