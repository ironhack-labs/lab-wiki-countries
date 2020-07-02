import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <li>
      <Link to={props.id}>{props.name}</Link>
    </li>
  );
};

export default CountriesList;
