import React, { Component } from 'react';
import axios from 'axios';

export class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {},
      countries: [],
      borders: [],
    };
  }
  componentDidMount = async () => {
    const responseL = await axios.get('https://restcountries.eu/rest/v2/');
    this.setState({ countries: responseL.data });
    const responseC = await axios.get(
      'https://restcountries.eu/rest/v2/alpha/' +
        this.props.match.params.country
    );
    this.setState({ country: responseC.data });
    const borders = this.state.country.borders.map((b) => {
      const border = this.state.countries.find((c) => c.alpha3Code === b);
      if (border) {
        return (
          <li key={border.alpha3Code}>
            <a href={'/' + border.alpha3Code}>{border.name}</a>
          </li>
        );
      }
    });
    this.setState({ borders: borders });
  };
  render() {
    return (
      <div className="col-7">
        <h1>{this.state.country.name}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: 30 }}>Capital</td>
              <td>{this.state.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>{this.state.borders}</ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
