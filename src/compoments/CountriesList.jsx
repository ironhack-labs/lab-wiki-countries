import React from 'react';
import { Link } from 'react-router-dom';

export const CountriesList = (props) => {
  const getFlagEmoji = (countryCode) =>
    String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
    );
  const countries = props.countries;
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((c) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={'/countries/' + c.alpha3Code}
            >
              <h1>{getFlagEmoji(c.alpha2Code)}</h1>
              <p>{c.name.common}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
