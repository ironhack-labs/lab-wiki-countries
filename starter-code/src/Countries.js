import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from './countries.json';

const Countries = (props) => {
  const { countries } = props;
  const styleObj = {
    maxHeight: '90vh',
    overflow: 'scroll'
  };
  return (
    <div className="col-5" style={styleObj}>
      <div className="list-group">
        {
          countries.map((country, idx) => 
            (
            <Link className="list-group-item list-group-item-action text-left" to={`/${country.cca3}`} key={idx}>
              {country.flag} {country.name.common}
            </Link>
            )
          )
        }
      </div>
    </div>
  );
}

export default Countries;