import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
  const countryCca = props.match.params.cca3;

  const currentCountry = props.countries.filter((country) => {
    return country.cca3 === countryCca;
  })[0];
  
  return (
    <div className="col-7">
      <h1>{currentCountry.name.common}</h1>
      <table className="table" >
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}} >Capital</td>
            <td>{currentCountry.capital}</td>
          </tr>        
            <td>Area</td>
            <td>{currentCountry.area} km²</td>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {
                  currentCountry.borders.map((border) => {
                    return (
                      <li>
                        <Link to={`/${border}`}>{props.countries.filter((country) => {
                          return country.cca3 === border;
                        })[0].name.common}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </td>
          </tr>

          <tr>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
