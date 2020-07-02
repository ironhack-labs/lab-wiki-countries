import countries from '../countries.json';
import React from 'react';

const CountryDetail = props => {
  let country = countries.find(eachCountry => {
    return eachCountry.cca3 === props.match.params.idd;
  });

  return <div className="detail">CountryDetail {props.match.params.idd}</div>;
};

export default CountryDetail;
