import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import Router from "./Router";

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
        // simplifying array of objects
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
        this.setState({ countries });
      });
  }

  render() {
    const { countries } = this.state;
    return (
      <div className="App">
        <NavBar />
        <section className="uk-section uk-section-muted uk-padding-remove uk-margin-left">
          <div className="uk-container uk-container-expand uk-padding-remove">
            <div className="uk-grid-small" uk-grid="true">
              <div className="uk-overflow-auto fill-viewport">
                <ul className="uk-nav uk-nav-default" uk-nav="true">
                  {countries.map((country, index) => (
                    <li key={index} className="uk-nav-divider">
                      <Link
                        to={{
                          pathname: `/detail/${country.cca3}`,
                          state: { countries }
                        }}
                      >
                        {country.flag} {country.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="uk-width-expand">
                <Router />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
