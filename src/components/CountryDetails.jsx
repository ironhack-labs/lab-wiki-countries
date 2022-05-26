import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountryDetails() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then(
        (response) => {
          setCountry(response.data);
        })
       },
        [countryId]
      );

  return (
    <div class="col-7">
      {!country && <h2>No country found!</h2>}
      {country && (
        <>
        <div> <img width="200" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                  </div>
          <h1 className="py-3">{country.name.common}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km2
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                {!country.borders && <h2>No borders</h2>}
                {country.borders && (
                  <td>
                    {country.borders.map((border) => {
                      return (
                        <div>

                        <Link  to={`/${border}`}>{border}</Link>
                        </div>
                      );
                    })}
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </>
      )}
      ;
    </div>
  );
}

export default CountryDetails;
