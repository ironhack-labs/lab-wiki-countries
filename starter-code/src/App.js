import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import countries from "./countries.json";
import CountryLink from "./components/CountryLink";
import CountryDetail from "./components/CountryDetail";

const App = () => (
  <div>
    <div class="row">
      <div class="col-5"></div>
      <div class="col-7"></div>
    </div>

    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active">
        WikiCountries
      </a>
      <div className="mainContent">
        <container className="listItems">
          {countries.map(eachCountry => (
            <CountryLink
              path={`/${eachCountry.cca3}`}
              flag={eachCountry.flag}
              name={eachCountry.name.common}
            />
          ))}
        </container>
        <container className="countryDetail">
          <Route path="/:countryCode" component={CountryDetail} />
        </container>
      </div>
    </div>
  </div>
);
export default App;
