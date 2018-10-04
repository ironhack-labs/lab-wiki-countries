import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";
import { CountryDetail } from "./CountryDetail";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries,
      pickCountry: false
    };
  }
  render() {
    return (
      <div className="container border">
        <div className="list-group">
          <span
            className="list-group-item list-group-item-action"
            style={{ backgroundColor: "#3498DB", color: "white" }}
          >
            WikiCountries
          </span>
          <div className="row">
            <div className="col-5 pre-scrollable">
              {this.state.countries.map((e, index) => {
                return (
                  <Link to={"/country/" + e.cca3}>
                    <div>
                      <CountryDetail
                        key={index}
                        name={e.name.common}
                        flag={e.flag}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
