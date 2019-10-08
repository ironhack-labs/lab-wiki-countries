import React from "react";
import "./App.css";
import countries from "./countries";
import { Route , Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="title"> WikiCountries</h1>
      <div className="left-right">
        <div className="container country-list col-5 right">
          {countries.map(item => (
            <ul className="list-group">
              <li className="list-group-item" key={item.cca2}>
                <Link to={`/country/${item.cca3}`}>
                  {item.cca2} {item.name.common}
                </Link>
              </li>
            </ul>
          ))}
        </div>

        <div className="container country-details col-7 left">
          <Switch>
            <Route path="/country/:id" component={CountryDetail} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;