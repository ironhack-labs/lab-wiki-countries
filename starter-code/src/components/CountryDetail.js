import React from 'react';

const getCountry = (countries, id) => {
  const countryIndex = countries.findIndex(country => country.cca3 === id);
  return countries[countryIndex];
}

const CountryDetail = ({ countries, match }) => {
  const { params: { id } } = match;
  const country = getCountry(countries, id)
  const { name, capital, area, borders } = country;
  return (
    <div className='col-7'>
      <h1>{name.common}</h1>
      <table className='table'>
        <tbody>
          <tr>
            <td style={{width: '30%'}}>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {borders.map(id =>
                  <li key={id}>
                    <a href={`/${id}`}>
                      {getCountry(countries, id).name.common}
                    </a>
                  </li>)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetail;
