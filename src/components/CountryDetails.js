import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


class CountryDetails extends React.Component {

    render() {
  
      const getCountryByCode = cca3 => countries.find(el => el.cca3 === cca3);
  
      const country = { ...getCountryByCode(this.props.match.params.id) };
  
      console.log(country);
  
      const borders = country.borders.map(cca3 => getCountryByCode(cca3));
  
      console.log(country);
      return (
        <div className="col-7">
          <h1>{country.flag}{country.name.common}</h1>
          <table className="table">   
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td> {country.area} km <sup>2</sup> </td>
              </tr>
              <tr>
                <td>Currency</td>
                <td> {country.currency} </td>
              </tr>
              {borders.length > 0 && (
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {borders.map(e => {
                        return (
                          <li key={e.cca3}>
                            <Link to={`/${e.cca3}`}>
                              {e.name.common}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  export default CountryDetails;