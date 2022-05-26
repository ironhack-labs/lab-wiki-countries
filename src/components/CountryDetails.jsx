import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountryDetails(response.data);
      })
      .catch((err) => console.log(err));
  }, [countryId]);

  return (
    <div className="col-7">
      {!countryDetails && <p>No countries were found</p>}
      {countryDetails && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
          <h1>{countryDetails.name.official}</h1>
          <table className="table">
            <thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{countryDetails.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {countryDetails.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li>
                        {countryDetails.borders.map((el) => {
                          return <li>{el}</li>;
                        })}
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </thead>
          </table>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
