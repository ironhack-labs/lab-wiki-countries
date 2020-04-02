import React from "react";
import Countries from "../countries.json";
import CountryList from "../components/CountryList";
import { Route } from "react-router-dom";
import CountryDetail from "../components/CountryDetail";
// import { Link, Route } from "react-router-dom";

class CountriesWiki extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {Countries.map((country, index) => (
            <CountryList
              key={index}
              name={country.name.official}
              flag={country.flag}
              code={country.cca3}
            />
          ))}
        </ul>
        <div>
          <Route path="/country-detail/:code" component={CountryDetail} />
        </div>
      </div>
    );
  }
}

export default CountriesWiki;
