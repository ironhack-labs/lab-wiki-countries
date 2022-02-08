import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const axios = require('axios');

function CountryDetails({ countriesData, countries }) {
  const [countryDetails, setCountryDetails] = useState({} );

  const { countryId } = useParams();

  //console.log('ID', countryId);

  // ESTO ERA PARA FILTRAR EL COUNTRY BASED EN EL PARAMS PARA ITERACIONES SIN LA API
  // const filteredCountry = countriesData.filter(
  //   (country) => country.alpha3Code === countryId
  // );

  // const flagImgCode = `https://flagpedia.net/data/flags/icon/72x54/${filteredCountry[0].alpha2Code.toLowerCase()}.png`;

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountryDetails({...countryDetails,borders:response.data.borders,name:response.data.name.common,capital:response.data.capital[0],area:response.data.area,contryId:response.data.alpha3Code})
      })
      .catch((error) => console.log('EL ERROR', error));
  }, [countryId]);

 
  console.log('Country Common Name', countryDetails);

  return (
    <div className="col-7">
      <h1>{countryDetails.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="td-style">Capital</td>
            <td>{countryDetails.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetails.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                { !countryDetails.borders ? <span>No hay borders</span> : countryDetails.borders.map((country) => (
                  <li>
                    <Link to={`/${country}`}>{country}</Link>{' '}
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
