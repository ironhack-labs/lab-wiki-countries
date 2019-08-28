import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import countries from "../countries.json";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {Link} from 'react-router-dom'

class CountriesList extends Component {
  state = {
    countries: countries
  };

  render() {
    return (
      <DropdownButton id="dropdown-basic-button" title="Countries">
        {this.state.countries.map((e, i) => (
          <Dropdown.Item key={i} to={`/${e.cca3}`}>
            <Link to={`/${e.cca3}`}>
              {e.flag} {e.name.official}
            </Link>
          </Dropdown.Item>
        ))}
      </DropdownButton>
    );
  }
}

export default CountriesList;
