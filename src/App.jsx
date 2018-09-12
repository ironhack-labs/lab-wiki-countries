import React from "react";
import { BrowserRouter } from "react-router-dom";
import countries from "./countries";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countryList: countries
    };
  }
  render() {
    const displayCountries = this.state.countryList.map((country, index) => {
      return (
        <a
          className="list-group-item list-group-item-action"
          href={"/" + country.cca3}
          key={index}
        >
          {country.flag} {country.name.common}
        </a>
      );
    });

    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div
            className="col-5"
            style={{ width: "300px", maxHeight: "90vh", overflowY: "scroll" }}
          >
            {/* TESTING */}
            <div className="list-group">{displayCountries}</div>
            {/* TESTING */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
