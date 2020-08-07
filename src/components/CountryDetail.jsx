import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class CountrieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {},
      countryCode: props.match.params.id,
    };
  }
  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/alpha/' + this.state.countryCode)
      .then((response) => {
        this.setState({ country: response.data });
      });
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      axios
        .get(
          'https://restcountries.eu/rest/v2/alpha/' + this.props.match.params.id
        )
        .then((response) => {
          this.setState({ country: response.data });
        });
    }
  }

  render() {
    let borders = '';

    if (this.state.country.borders) {
      borders = this.state.country.borders.map((border) => (
        <li key={border}>
          <Link to={`/${border}`}>{border}</Link>
        </li>
      ));
    }
    return (
      <div style={{ width: 400, float: 'right' }}>
        <h1>Details </h1>
        <h1>{this.state.country.name}</h1>
        <h4>Capital: {this.state.country.capital}</h4>
        <h4> Area: {this.state.country.area} km2</h4>
        <div>
          <h3>Borders</h3>
          <ul>{borders}</ul>
        </div>
      </div>
    );
  }
}

export default CountrieDetail;
