import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { countryId } = useParams();
  const foundCountry = countries.find((country) => {
    return country.alpha3Code === countryId;
  });
  
  return (
    <div className="col-7">
      {foundCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt="country's flag"
          />
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countries.map((country, i) => {
                     return foundCountry.borders.find((borderCountry) => 
                      borderCountry === country.alpha3Code) ? (
                        <Link to={`/${country.alpha3Code}`}>
                          <h4 key={i}>{country.name.common}</h4>
                        </Link>
                      ) : null  
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CountryDetails;
