import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {},
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://restcountries.eu/rest/v2/alpha/' + this.props.match.params.id
      )
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
    const country = this.state.country;
    let countryBorders = '';
    if (country.borders) {
      countryBorders = country.borders.map((border) => (
        <li  className="borders" key={border}>
          <Link to={`/${border}`}>{border}</Link>
        </li>
      ));
    }

    return (
      <div className="countryDetails">
        <h1>{country.name}</h1>
        <table className="table">
          <tbody>
            <tr>
              <th style={{ width: '100%' }}>Capital</th>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <th>Area</th>
              <td>{country.area}</td>
            </tr>
            <tr>
              <th>Borders</th>
              <td>
                <ul>{countryBorders}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;