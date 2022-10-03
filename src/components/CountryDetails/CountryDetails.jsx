import React, { useCallback, useEffect, useState } from 'react';
import { fetchOneCountry } from '../../services/countries-services';

export default function CountryDetails(props) {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);

  const getOneCountry = useCallback(async () => {
    const country = await fetchOneCountry(props.code);
    console.log(country.data);
    setCountry(country.data);
    setLoading(false);
  }, [props.code]);

  useEffect(() => {
    getOneCountry();
  }, [getOneCountry]);

  return loading ? (
    'Loading...'
  ) : (
    <div className="d-flex flex-column col-6 mt-5">
      <div>
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code?.toLowerCase()}.png`}
            alt="flag"
          ></img>
        </div>
        <h1 className="mt-3">{country.name?.common}</h1>
      </div>
      <div className="mt-5">
        <div
          className="d-flex flex-row justify-content-evenly p-1"
          style={{ borderBottom: '1px solid lightgrey' }}
        >
          <p>Capital</p>
          <p>{country.capital}</p>
        </div>
        <div
          className="d-flex flex-row justify-content-evenly p-1"
          style={{ borderBottom: '1px solid lightgrey' }}
        >
          <p>Area</p>
          <p>{country.area}</p>
        </div>
        {country.borders.length > 0 && (
          <div className="d-flex flex-row justify-content-evenly p-1">
            <p>Borders</p>
            <ul className="d-flex flex-column">
              {country.borders.map((country) => {
                return <li>{country}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
