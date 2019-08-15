import React, { Component } from "react";
import countriesJson from "../countries.json";
import CountryComponent from "./CountryComponent";

class ShowCountries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: countriesJson
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Lista de Países</h1>
        {countriesJson.map((elm, idx) => {
          return <CountryComponent key={idx} name={elm.name.common} flag={elm.flag} />;
        })}
      </div>
    );
  }
}
export default ShowCountries;
