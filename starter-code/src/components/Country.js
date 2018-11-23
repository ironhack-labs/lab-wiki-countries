import React from 'react';
import { NavLink } from 'react-router-dom';

const Country = ({cca3, name, flag}) => (
  <NavLink className="list-group-item list-group-item-action" to={`/${cca3}`} activeClassName="active">
    <span role="img" aria-label={`${name}'s flag`}>{flag}</span> {name}
  </NavLink>
);

export default Country;