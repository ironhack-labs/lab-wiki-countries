import React from 'react';
import { NavLink } from 'react-router-dom';

function Countrie(props) {
  return (
    <div className="list-group">
      <div>
        <NavLink
          key={props.key}
          className="list-group-item list-group-item-action"
          to={props.to}
        >
          <strong>{props.flag}</strong> {props.name}
        </NavLink>
      </div>
    </div>
  );
}

export default Countrie;
