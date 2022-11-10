// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import DotLoader from 'react-spinners/DotLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '100px auto',
};

function CountriesList({ loading, countries, searchInput }) {
  console.log(searchInput.searchInput);
  return (
    <>
      {loading && (
        <DotLoader color="#36d7ff" cssOverride={override} size={150} />
      )}
      {!loading && (
        <div
          className="col-5"
          style={{ maxHeight: '94vh', overflow: 'scroll' }}
        >
          <div className="list-group countries-list">
            {countries
              .filter((country) => {
                if (searchInput.searchInput === '') {
                  return country;
                } else if (
                  country.name.common
                    .toLowerCase()
                    .includes(searchInput.searchInput.trim().toLowerCase())
                ) {
                  return country;
                }
              })
              .sort((a, b) => a.alpha2Code.localeCompare(b.alpha2Code))
              .map((country) => {
                return (
                  <li key={country._id}>
                    <Link
                      className="list-group-item list-group-item-action "
                      to={country.alpha3Code}
                    >
                      <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        alt={country.name.official}
                        style={{ width: '25px', marginRight: '15px' }}
                      />
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
