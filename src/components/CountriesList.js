import React from 'react';
import './CountriesList.css';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div className="col-5 list">
      <div className="list-group">


        {props.countries.map((country) => {
          return (
            
              <Link
                to={"/country/" + country.cca3}
                key={country.cca3}
                className="list-group-item list-group-item-action"
              >
                {country.flag}
                {country.name.common}
              </Link>
            
          );
        })}


      </div>
    </div>
  );
};

export default CountriesList;