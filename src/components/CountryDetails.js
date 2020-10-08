import React, { Component } from 'react';
import countries from '/Users/andreialvarez/Desktop/Ironhack-Andrei/Module-3/lab-wiki-countries/src/countries.json';
import { Link } from 'react-router-dom';

export class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries,
    };
  }

  componentDidMount() {
    this.setState({
      countries: countries,
    });
  }

  searchCountry = (code) => {
    const newArray = countries.filter((elem) => elem.cca3 === code);
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
