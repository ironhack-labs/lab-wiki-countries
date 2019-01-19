import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import CountryDetail from "./components/CountryDetail.js";
import data from "./countries.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datacopy: data
    };
  }

  render() {
    return (
      <div>
        <div className="header">
          <h3>wikiCountries</h3>
        </div>
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {this.state.datacopy.map(e => (
                <NavLink
                  to={`/${e.cca3}`}
                  key={e.name.common}
                  className="list-group-item list-group-item-action"
                >
                  {e.flag} {e.name.common}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="col-7">
            <CountryDetail data={this.state.datacopy} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
