import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const foundCountry = countries.find(
      (oneCountry) => oneCountry.alpha3Code === alpha3Code
    );
    setCountry(foundCountry);
  }, [alpha3Code, countries]);

  const findBorders = (border) => {
    const foundBorder = countries.find(
      (country) => country.alpha3Code === border
    );
    return foundBorder ? foundBorder.name.common : 'Unknown Country';
  };

  return (
    <div className="col-7">
      {country ? (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={`Flag of ${country.name.common}`}
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.length > 0 ? (
                      country.borders.map((border) => (
                        <li key={border}>
                          <Link to={`/${border}`}>{findBorders(border)}</Link>
                        </li>
                      ))
                    ) : (
                      <li>No neighboring countries</li>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default CountryDetails;
