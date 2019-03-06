import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <div>
      <Link to={`/${props.cca3}`} key={props.cca3}>
        <div>
          <h2 className="list-group-item list-group-item-action">
            {props.flag}
            {props.name.common}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
