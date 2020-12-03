import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {props.countryInfo.map((item) => {
        return (
          <Link key={item.cca3} to={`/countrydetails/${item.cca3}`}>
            <p>{item.name.common}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
