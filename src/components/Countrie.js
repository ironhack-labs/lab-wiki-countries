import React from 'react';
import { Link } from 'react-router-dom';

function Countrie(props) {
  return (
    <div className="list-group">
      <div>
        <Link
          key={props.key}
          className="list-group-item list-group-item-action"
          to={props.to}
        >
          <strong>{props.flag}</strong> {props.name}
        </Link>
      </div>
    </div>
  );
}

export default Countrie;
