import React, {Component} from 'react';
import countries from '../countries.json';
import { NavLink } from 'react-router-dom';

class CountryDetail extends Component {

  findCountry(id) {
    return countries.find(country => country.cca3 === id)
  }

  render() {
    const id = this.props.match.params.id;
    const foundCountry = this.findCountry(id);

    return(
      <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {foundCountry.borders.length === 0 ?
                      <li style={{listStyle: "none"}}>None</li> :
                      foundCountry.borders
                      .map((countryCode) => {
                        return <li><NavLink key={countryCode} to={`/${countryCode}`}>{this.findCountry(countryCode).name.common}</NavLink></li>
                        })
                    }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      );
  }

  
}

export default CountryDetail;