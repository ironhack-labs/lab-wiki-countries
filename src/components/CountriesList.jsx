import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <>
      {countries.map((country) => {
        return (
          <div
            className="col-5"
            style={{
              marginLeft: '15px',
              maxHeight: '90vh',
              overflow: 'scroll',
            }}
            key={country.alpha3Code}
          >
            <div className="list-group">
              <h3>
                <Link className="list-group-item" to={`/${country.alpha3Code}`}>
                  {country.name.common}
                </Link>
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CountriesList;
