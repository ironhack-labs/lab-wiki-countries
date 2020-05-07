import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ name, code1, code2 }) => (
  <Link className="list-group-item list-group-item-action" to={`/${code1}`}>
    <img src={`https://www.countryflags.io/${code2}/shiny/24.png`} alt="flag" />
    <span> {name}</span>
  </Link>
);

export default CountryCard;
