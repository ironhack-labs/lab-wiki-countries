import React, { Component } from "react";
import "./style.css";

import ListGroup from "react-bootstrap/ListGroup";

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const country = this.props.country;
    return (
      <ListGroup.Item action variant="light" href={country.cca2}>
        <img
          className="FlagImg"
          src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
          alt=""
        />{" "}
        {country.name.official}
      </ListGroup.Item>
    );
  }
}

export default CountryList;
