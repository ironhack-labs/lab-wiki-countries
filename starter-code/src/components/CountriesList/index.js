import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountriesList extends Component {
  render() {
    return (
        <div className="uk-section uk-width-1-4 max-vh">
          <ul className="uk-list uk-list-divider uk-list-large">
            {this.props.countries.map((country, index) => (
              <li key={index}>
                <Link to={{
                    pathname: '/detail',
                    state: {
                        detail: country
                    }
                }}>{country.flag} {country.name.common}</Link>
              </li>
            ))}
          </ul>
        </div>
    );
  }
}

export default CountriesList;


