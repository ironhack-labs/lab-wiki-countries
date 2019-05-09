import React from 'react';
import { Link } from 'react-router-dom';

const ListOfCountries = ({ countries }) => {
  const countryList = countries.map(country => {
    const {
      name: { common: name },
      cca3: id,
      flag
    } = country;

    return (
      <li key={id} className="list-group-item">
        <Link to={`/country/${id}`}>
          <span>{flag}</span> <span>{name}</span>
        </Link>
      </li>
    );
  });

  return (
    <ul className="list-group" style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
      {countryList}
    </ul>
  );
};
export default ListOfCountries;
