import React from 'react';
import { Link } from 'react-router-dom';

const findCountryName = (countries, cca3) => {
  return countries.find(obj => obj.cca3 === cca3);
}

const CountryDetails = (props) => {
  const { countries } = props;
  const cca3 = props.match.params.cca3;
  const country = findCountryName(countries, cca3);

  return (
    <div className='col-7'>
      <h1>{country.name.common}</h1>
      <table className='table'>
        <thead></thead>
        <tbody>

          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{country.capital}</td>
          </tr>

          <tr>
            <td>Area</td>
            <td>{country.area} km
              <sup>2</sup>
            </td>
          </tr>

          {country.borders.length > 0 && <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((el, index) => (
                  <li key={index}>
                    <Link to={`/${el}`}>
                      {findCountryName(countries, el).name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>}

        </tbody>
      </table>
    </div>
  )

}

export default CountryDetails;
