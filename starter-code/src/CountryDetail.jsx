import React, {Component} from 'react';
import Countries from './countries.json';
import './CountryDetail.css';

const Details = props => {
  console.log (props.match.params.cca3);

  return (
    <div>
      {Countries.map ((country, idx) => {
        if (country.cca3 == props.match.params.cca3) {
          return (
            <div key={idx}>
              <div className="container-detail">
                <div className="row" />
                <div className="col-sm">
                <h2>{country.name.common}</h2>
                </div>
                <div className="col-sm">
                  <h3>Capital: {country.capital[0]}</h3>
                </div>
                <div className="col-sm">
                  <h3>Area: {country.area} m<sup>2</sup></h3>
                </div>
                <div className="col-sm">
                  <h3>Borders: </h3>
                  <ul>
                    <li>{country.borders}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Details;
