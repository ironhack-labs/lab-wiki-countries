import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const [countryDetail, setCountryDetail] = useState(null);
  let { alpha3Code } = useParams();
  
  useEffect(() => {
    if (alpha3Code) {
      fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then((response) => response.json())
        .then((data) => setCountryDetail(data))
        .catch((error) => console.error('Error fetching country details:', error));
    }
  }, [alpha3Code]);

  if (!countryDetail) {
    return <div>Select a country to view details</div>;
  }

  return (
    <div className='col d-flex flex-column align-items-center'>
      <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`}
              alt={`${countryDetail.name.common} Flag`}
              className="mr-2"
            />
      <h1>{countryDetail.name.common}</h1>
      <div className="col-8 d-flex justify-content-center">
      <table className="table text-center">
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{countryDetail.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetail.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul className="list-unstyled m-0">
                {countryDetail.borders.map((borderCode) => {
                  const borderCountry = countries.find(
                    (c) => c.alpha3Code === borderCode
                  );
                  return (
                    <li key={borderCode}>
                      <Link to={`/${borderCode}`}>
                        {borderCountry ? borderCountry.name.common : borderCode}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default CountryDetails;
