import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    axios.get("https://countries.tech-savvy.tech/countries")
    .then(response => {
        this.setState({countries: response.data})
    })
}

  searchCountry = (code) => {
    const newArray = this.state.countries.filter((elem) => elem.cca3 === code);
    return newArray;
  };

  render() {
    const { code } = this.props.match.params;
    const country = this.searchCountry(code);

    console.log();

    return (
      <>
        <div className="col-7">
          <h1>{country[0] && country[0].name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>
                  {country[0] &&
                    country[0].capital.map((elem) => (
                      <li key={elem}>{elem}</li>
                    ))}
                </td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country[0] && country[0].area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li>
                      {country[0] &&
                        country[0].borders.map((elem) => (
                          <Link key={elem} to={'/' + elem}>
                            {' '}
                            ({elem}){' '}
                          </Link>
                        ))}
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
