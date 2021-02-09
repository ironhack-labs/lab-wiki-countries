import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import countries from '../countries.json';

export default class CountryDetails extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    const country = countries.find(
      (country) => country.cca3 === this.props.match.params.countryName
    );

    if (country) {
      this.setState({ ...country, show: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const country = countries.find(
      (country) => country.cca3 === this.props.match.params.countryName
    );

    if (prevState.cca3 !== country.cca3) {
      this.setState({ ...country, show: true });
    }
  }

  render() {
    console.log(this.state);

    return (
      <div className="col-7">
        {this.state.show && (
          <div>
            <h1 className="text-center">{this.state.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{this.state.capital[0] ? this.state.capital[0] : '-'}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {this.state.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {this.state.borders.length
                        ? this.state.borders.map((border, i) => {
                            let country = countries.find(
                              (item) => item.cca3 === border
                            );
                            console.log(country);
                            return (
                              <Link key={i} to={`/countries/${border}`}>
                                <li>{country.name.common}</li>
                              </Link>
                            );
                          })
                        : '-'}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
