import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div
      className="container d-flex flex-row justify-content-center scroll-container bg-light text-dark border rounded"
      style={{ maxHeight: '90vh', overflow: 'scroll' }}
    >
      <div>
        {countries.map((country) => (
          <Link
            to={`/${country.alpha3Code}`}
            key={country.alpha3Code}
            className="text-decoration-none text-black"
          >
            <div className="card text-center">
              <div className="mt-3">
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  className="card-img-top"
                  alt="countyImage"
                  style={{ width: 90 }}
                />
              </div>
              <div className="card-body">
                <p className="card-text">{country.name.common}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
