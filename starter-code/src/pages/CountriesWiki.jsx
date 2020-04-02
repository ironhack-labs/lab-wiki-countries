import React from "react";
import Countries from "../countries.json";
import CountryList from "../components/CountryList";
import { Route } from "react-router-dom";
import CountryDetail from "../components/CountryDetail";
import '../styling/CountriesWiki.css';


class CountriesWiki extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-6">
        <ul className="countries-list">
          {Countries.map((country, index) => (
            <CountryList
              key={index}
              name={country.name.official}
              flag={country.flag}
              code={country.cca3}
            />
          ))}
        </ul>
        </div>
        <div className="col-6">
          <Route path="/country-detail/:code" component={CountryDetail} />
        </div>
        </div>
      </div>
    );
  }
}

export default CountriesWiki;
