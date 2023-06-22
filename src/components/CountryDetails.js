import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails({ countries }) {
  const { id } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function fetchCountryData() {
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`);
      const data = response.data;
      setCountryData(data);
    }
    fetchCountryData();
  }, [id]);

  const country = countries.find((e) => e.alpha3Code === id);

  if (!country) {
    return <div>Loading, please wait</div>;
  }

  return (
    <div className="col-7">
      <h1>
        <img
          src={`https://flagpedia.net/data/flags/normal/${country.alpha2Code.toLowerCase()}.png`}
          alt={country.name.common + ' flag'}
          style={{ marginRight: '1rem', height: '10rem' }}
        />
        {country.name.common}
      </h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryData?.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryData?.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border) => (
                  <li key={border}>
                    <Link to={`/${border}`}>
                      {countries.find((e) => e.alpha3Code === border)?.name.common}
                    </Link>
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