import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import '../index.css';

const { Meta } = Card;

const CountryDetails = ({ name, flags, capital, area, borders }) => {
  return (
    <Link to={`/countries/${name}`}>
      <Card className="card" hoverable>
        <Meta title={name.common} />
        <img src={flags.svg} alt={name} width="100" />
        <p>{name}</p>
      </Card>
    </Link>
  );
};

export default CountryDetails;
