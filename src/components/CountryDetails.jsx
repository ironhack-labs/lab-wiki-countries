import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails(props) {
  const [country, setCountry] = useState(null);
  const { alpha3Code } = useParams();

  function findCountry() {
    const foundCountry = props.countries.find((oneCountry) => {
      return oneCountry.alpha3Code === alpha3Code;
    });

    setCountry(foundCountry);
  }

  function findBorders(border) {
    const foundBorder = props.countries.find((country) => {
      return country.alpha3Code === border;
    });

    return foundBorder.name.common;
  }

  useEffect(() => {
    findCountry();
  }, [alpha3Code]);

  return (
    <div className="col-7">
      {country != null ? (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>

                <td>
                  <ul>
                    {country.borders.length > 0 &&
                      country.borders.map((border) => {
                        return (
                          <li key={border}>
                            <Link to={`/${border}`}>{findBorders(border)}</Link>
                          </li>
                        );
                      })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
}

export default CountryDetails;
