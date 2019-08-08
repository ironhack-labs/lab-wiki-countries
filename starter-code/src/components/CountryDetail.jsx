import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import countriesData from "../countries.json";


class CountryDetail extends Component {

  constructor(props) {
    super(props);
  };

  render() {

    let countryObj = countriesData.find((country) => {
      return country.cca3 === this.props.match.params.cca3;
    })

    return (
      <div className="col-7">

        <h1>{countryObj.name.common}</h1>

        <table className="table">

        <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{countryObj.capital}</td>
            </tr>

            <tr>
              <td>Area</td>
              <td>{countryObj.area} km
                <sup>2</sup>
              </td>
            </tr>

            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countryObj.borders.map((element, index) => {
                    return (
                      <li key={index}><Link to={'/country/' + element}>{element}</Link></li>
                      )
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <Link to='/'><Button>Home</Button></Link>

      </div>
    );
  }
}

export default CountryDetail;