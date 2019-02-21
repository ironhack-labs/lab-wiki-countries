import React, { Component } from "react";
import "./CountryList.css";
import allCountries from "../countries.json";

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryArray: allCountries
    };
  }

  render() {
    const { countryArray } = this.state;

    return (
      <div className="CountryList">
        {/* <a class="list-group-item list-group-item-action" href="/ABW">
          <span role="img">🇦🇼</span>Aruba
        </a> */}

        <ul>
          {countryArray.map(oneCountry => {
            return (
              <a
                key={oneCountry._id}
                class="list-group-item list-group-item-action"
                href={oneCountry.cca3}
              >
                <span role="img"> {oneCountry.flag}</span>
                &nbsp; {oneCountry.name.common}
              </a>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CountryList;
