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
    const countryData = this.state.country;
    let countryBorders = '';
    if (countryData.borders) {
      countryBorders = countryData.borders.map((border) => (
        <li key={border}>
          <Link to={`/${border}`}>{border}</Link>
        </li>
      ));
    }

    return (
      <div className="p-2">
        <h1>{countryData.name}</h1>
        <table className="table">
          <tbody>
            <tr>
              <th style={{ width: '400px' }}>Capital</th>
              <td>{countryData.capital}</td>
            </tr>
            <tr>
              <th>Area</th>
              <td>{countryData.area}</td>
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
