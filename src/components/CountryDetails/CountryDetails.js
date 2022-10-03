import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCountries } from '../../services/country-service';

const CountryDetail = () => {
  const { alpha3code } = useParams()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    fetchCountries(alpha3code)
      .then(country => setCountry(country))
  }, [alpha3code])

  return (
    <div className="col-6 pt-5">
      {country ? (
        <div className="col-7">
          <img
            alt={country.alpha2Code}
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td >Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area + 'km'}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {country.borders.map((border, i) => {
                    return (<li key={border}><Link to={`/${border}`}>{border}</Link></li>)
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : 'Loading country...'}
    </div>
  );
};

export default CountryDetail;