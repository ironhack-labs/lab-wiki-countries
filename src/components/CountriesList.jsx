import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  const [search, setSearch] = useState('');

  /*   useEffect(() => {
    if (search.length > 0)
      setCountries(
        countriesData.filter((country) => country.alpha3Code === search)
      );
  }, [search]);
 */
  /*    useEffect(() => {
        setCountries(countriesData);
      }, []); */

  return (
    <div>
      <h2>Countries List</h2>

      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {countries.map((country) => {
        return (
          <div key={country.alpha3Code} className="country">
            <h3>
              <Link to={`/countries/${country.alpha3Code}`}>
                {country.alpha3Code}
              </Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
