import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    countries: []
  };

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
      )
      .then(res => {
        const countries = res.data.map(
          ({ cca3, name, flag, capital, area, borders }) => ({
            cca3,
            name: name.common,
            flag,
            capital,
            area,
            borders
          })
        );
        console.log(countries);
        this.setState({ countries });
      });
  }

  render() {
    const { countries } = this.state;
    return (
      <div className="App">
        <section className="uk-section uk-section-primary uk-section-xsmall uk-padding-remove-vertical">
          <nav
            className="uk-navbar-container uk-navbar-transparent"
            uk-navbar="true"
          >
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <Link to="/">WikiCountries</Link>
                </li>
              </ul>
            </div>
          </nav>
        </section>
        <section className="uk-section uk-section-muted uk-padding-remove uk-margin-left">
          <div className="uk-container uk-container-expand uk-padding-remove">
            <div className="uk-grid-small" uk-grid="true">
              <div className="uk-overflow-auto fill-viewport">
                <ul className="uk-nav uk-nav-default" uk-nav="true">
                  {countries.map((country, index) => (
                    <li key={index} className="uk-nav-divider">
                      <Link to={`/detail/${country.cca3}`}>
                        {country.flag} {country.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1>Countries</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
