import React from 'react';
import { Link } from 'react-router-dom';

const TableCountry = ({ name, capital, area, borders }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>
      <ul>borders:
          {borders.map((item) => <li> <Link to={item}>{item}</Link> </li>)}
      </ul>
    </div>
  );
};

export default TableCountry;