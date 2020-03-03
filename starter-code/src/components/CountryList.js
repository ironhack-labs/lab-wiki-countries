import React from 'react';
import { Link } from 'react-router-dom';

const CountryList = (props) => {
  const { countries } = props;
  return (
    <div className="list-group">
      {countries.map((item, index) => {
        return <Link key={index} className="list-group-item list-group-item-action" to={`/${item.cca3}`}> <span role="img">{item.flag}</span>  {item.name.common}</Link>
      })}
    </div>
  );
};

export default CountryList;