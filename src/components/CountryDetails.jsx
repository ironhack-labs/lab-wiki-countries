import React, { Component } from 'react';
import countries from './../countries.json';

export class CountryDetails extends Component {
  state = {
    country: null,
  };

  componentDidMount() {
    this.loadCountry();
  }

  loadCountry() {
    const country = countries.find(
      (item) => item.cca3 === this.props.match.params.id
    );
    console.log(country);
    this.setState({
      country: country,
    });
    console.log(this.state);
  }

  render() {
    console.log('render', this.state.country);
    return (
      <div>
        {this.state.country && (
          <div class="col-7">
            <h1>{this.state.country.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
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
                    {/* <ul>
                      {this.state.country.borders.map((border) => (
                        <li>
                          {countries
                            .filter((country) => {
                              return country.cca3 === border;
                            })
                            .map((filteredCountry) => filteredCountry)}
                        </li>
                      ))}
                    </ul> */}
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

export default CountryDetails;
