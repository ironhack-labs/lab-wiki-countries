import React, { Component } from 'react';
import axios from 'axios';

export class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: {},
    };
  }

  componentDidMount() {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${this.props.countryCode}`)
      .then((response) => {
        this.setState({ countryData: response.data });
      });
  }

  render() {
    let country = this.state.countryData;
    console.log('country borders: ', country.borders);
    console.log('country: ', country);
    let countryBorders = '';
    if (country.borders) {
      countryBorders = country.borders.map((border) => (
        <li key={border}>
          <a href={`/${border}`}>{border}</a>
        </li>
      ));
    }

    if(this.state.countryData.name) {
        return (
            <div key={country.alpha3Code}>
              <h1> <img
          src={country.flag}
          alt="flag"
          style={{
            width: '40px',
            'margin-right': '10px',
          }}
        ></img> {country.name}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{ width: '30%' }}>Country capital</td>
                    <td>{country.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {country.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>{countryBorders}</ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
    }

    return(<div></div>)
    
  }
}

export default CountryDetail;
