import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const axios = require('axios');

function CountryDetails({ countriesData, countries }) {
  const [countryDetails, setCountryDetails] = useState([]);

  const { countryId } = useParams();

  console.log('ID', countryId);

  // ESTO ERA PARA FILTRAR EL COUNTRY BASED EN EL PARAMS PARA ITERACIONES SIN LA API
  const filteredCountry = countriesData.filter(
    (country) => country.alpha3Code === countryId
  );

  const flagImgCode = `https://flagpedia.net/data/flags/icon/72x54/${filteredCountry[0].alpha2Code.toLowerCase()}.png`;

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => setCountryDetails(response.data))
      .catch((error) => console.log('EL ERROR', error));
  }, [countryId]);

  // console.log('countryDETAILS', countryDetails.name.common);

  return (
    <div className="col-7">
      <h1>{filteredCountry[0].name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="td-style">Capital</td>
            <td>{filteredCountry[0].capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {filteredCountry[0].area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {filteredCountry[0].borders.map((country) => (
                  <li>
                    <Link to={`/${country.alpha3Code}`}>{country}</Link>{' '}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
