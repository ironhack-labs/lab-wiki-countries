import React from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react'

function CountryDetails(props) {
 
  const { alpha3Code } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => {
        setCountryData(response.data);
      })
      .catch((error) => {
        console.log(`Error getting country details for ${alpha3Code} from the API...`);
        console.log(error);
      });
  }, [alpha3Code]);

return (
  <div>

    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          WikiCountries
        </a>
      </div>
    </nav>


    <div className="container">
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>

      {countryData
        ? (<div>
          <h1>{countryData.name.common}</h1>

          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{countryData.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryData.area} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul style={{ listStyle: 'none'}}>
                    {countryData.borders.map((borderUrl) => (
                      <li key={borderUrl}>
                        <Link to={`/${borderUrl}`}>{borderUrl}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        )
        : (<p>Loading...</p>)
      }
    </div>
  </div>
  );
}
    


    export default CountryDetails;
