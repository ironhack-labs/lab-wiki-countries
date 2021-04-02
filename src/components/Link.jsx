import React from 'react';
import { Link } from 'react-router-dom';

const Links = (props) => {
  const { name, alpha3Code, flag } = props
  return (
    <>
      <Link className="list-group-item list-group-item-action" to={`/${alpha3Code}` }>
        <img style={{width: '20px'}} alt='flag' src={flag}/> {name}
      </Link>
    </>
  );
};

export default Links;
