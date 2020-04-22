import React from "react";
import "./App.css";
import CountryData from "./components/CountryData";
import Data from "./countries.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
function App() {
  return (
    <div id="root">
      
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className=" overflow  list-group">
                {Data.map(function (item, i) {
                  return (
                   
                    <a
                     key={i}
                      className="list-group-item list-group-item-action"
                      href={item.cca3}
                    >
                      <img
                        src={`https://www.countryflags.io/${item.cca2}/flat/64.png`}
                      />
                      {item.name.common}
                    </a>
                  );
                })}
              </div>
            </div>

            <Router>
              <Route path="/:country" exact component={CountryData} />
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
