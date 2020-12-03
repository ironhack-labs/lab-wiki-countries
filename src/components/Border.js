import React from 'react';
import { Link } from 'react-router-dom';

function Border(props) {
  return (
    <li key={props.key}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
}

export default Border;
