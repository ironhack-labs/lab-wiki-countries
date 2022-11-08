// import { useState, useEffect } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSomething() {
      const apiURL = 'https://ih-countries-api.herokuapp.com/countries';
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
      setCountries(data);
      setLoading(false);
    }
    fetchSomething();
  }, []);

  return (
    <>
      {loading && <h1>We´re loading!</h1>}
      {!loading && (
        <div
          className="col-5"
          style={{ maxHeight: '94vh', overflow: 'scroll' }}
        >
          <div className="list-group countries-list">
            {countries
              .sort((a, b) => a.alpha2Code.localeCompare(b.alpha2Code))
              .map((country) => {
                return (
                  <li key={country._id}>
                    <Link
                      className="list-group-item list-group-item-action "
                      to={country.alpha3Code}
                    >
                      {country.alpha2Code} {country.name.official}
                    </Link>
                  </li>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
export default CountriesList;
