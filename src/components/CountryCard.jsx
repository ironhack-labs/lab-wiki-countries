import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = (props) => {
  return (
    <Link className="text-dark" to={'/details/' + props.country.cca3}>
      <article className="card p-2 my-2 flex-row">
        <span className="pr-3">{props.country.flag}</span>
        <span>{props.country.name.common}</span>
      </article>
    </Link>
  );
};

export default CountryCard;
