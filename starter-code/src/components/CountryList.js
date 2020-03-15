import React, { useContext } from 'react';
import { CountryContext } from '../contexts/CountryContext'; 
import { Link } from 'react-router-dom';

const CountryList = () => {
  const {countries} = useContext(CountryContext);

  return(
    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <div className="list-group">
        {countries.map(country => {
          return(<Link className="list-group-item list-group-item-action" key={country.cca3} to={country.cca3}>{country.flag} {country.name.official}</Link>);
        })}     
      </div>
    </div>
  );

}

export default CountryList;