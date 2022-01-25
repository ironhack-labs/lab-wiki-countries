import React from 'react';
import { Link } from 'react-router-dom';

const CountryLink = ({ path, name, flag }) => {
  return (
    <Link to={`/countries/${path}`}>
      <div className="d-flex" style={{ gap: 8 }}>
        <img
          className="img-fluid"
          style={{ maxHeight: 16, marginTop: 4 }}
          src={`https://flagpedia.net/data/flags/icon/72x54/${flag.toLowerCase()}.png`}
          alt={`Flag of ${name}`}
        />
        {name}
      </div>
    </Link>
  );
};

export default CountryLink;
