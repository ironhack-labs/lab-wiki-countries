import React from 'react';
import { Link } from 'react-router-dom';

const BordersList = ({ countries, borders, handleClick }) => {
  return (
    <ul>
      {borders?.map((b, i) => (
        <li key={`${i}-${b}`}>
          <Link to={`/${b}`} onClick={() => handleClick(b)}>
            {countries.filter((c) => c.cca3 === b)[0].name.common}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BordersList;
