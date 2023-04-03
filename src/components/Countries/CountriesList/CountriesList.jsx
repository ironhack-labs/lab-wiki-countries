import React from 'react';
import { Link } from 'react-router-dom';

export const CountriesList = ({ name, alpha3Code, alpha2Code }) => {
  return (
    <div className="CountriesList">
      <Link className="text-decoration-none text-dark" to={alpha3Code}>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
          alt="Country Flag"
          style={{ width: '40px', paddingBottom: '10px' }}
        />
        <h6>{name.common}</h6>
      </Link>
    </div>
  );
};
