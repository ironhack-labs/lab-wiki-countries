import React, { Component } from 'react'
import countries from "./../countries";
import { ListGroup } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

export default class CountryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    const country = countries.find(country => country.cca3 === id);
    return {
      ...state,
      country
    };
  }

  render() {
    const country = this.state.country;
    return (
      <div>
        <ListGroup>
          <ListGroup.Item><h1>{this.state.country.name.common}</h1></ListGroup.Item>
          <ListGroup.Item><h4>Capital: </h4>{this.state.country.capital}</ListGroup.Item>
          <ListGroup.Item>
            <ul>
              {country.borders.map(border => <li>{(border)}</li>)}
            </ul>
          </ListGroup.Item>
        </ListGroup>
      </div>
    )
  }
}

