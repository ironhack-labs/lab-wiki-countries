import React from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default props => (
  <Link
    className="text-decoration-none text-reset"
    to={`/country/${props.country.cca3}`}
  >
    <Card
      bg="light"
      className="d-flex flex-row align-items-center"
      style={{ height: '3rem' }}
    >
      <Card.Img
        style={{ width: '3rem' }}
        variant="top"
        src={`https://www.countryflags.io/${props.country.cca2}/flat/64.png`}
      />
      <Card.Body>
        <Card.Title className="d-flex align-items-center font-weight-light">
          {props.country.name.common}
        </Card.Title>
      </Card.Body>
    </Card>
  </Link>
);
