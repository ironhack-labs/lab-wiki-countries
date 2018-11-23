import React from 'react';
import { Link } from 'react-router-dom';

const Borders = ({cca3, data}) => (
  <li>
    <Link to={`/${cca3}`}>
      {data
        .filter( country => country.cca3 === cca3)
        .map( country => country.name.common)
      }
    </Link>
  </li>
);

export default Borders;