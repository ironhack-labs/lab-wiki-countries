import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountriesList from '../CountriesList';

class CountriesDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getCountryDetails = () => {
    const { list, match } = this.props;
    return list.filter(c => c.value.cca3 === match.params.id);
  };

  render() {
    const { list, getName } = this.props;
    const country = this.getCountryDetails();
    return (
      <React.Fragment>
        <CountriesList list={list} />

        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
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
                  <ul>
                    {country.borders.length > 0 ? (
                      country.borders.map(c => (
                        <li>
                          <Link key={c.name} to={`/countries/${c}`}>
                            {getName(c)}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <span>no borders</span>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default CountriesDetails;
