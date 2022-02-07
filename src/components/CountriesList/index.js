import React from 'react';
import PropTypes from 'prop-types';
import { useFetchCountries } from '../../hooks/useFetchCountries';
import {  Link } from 'react-router-dom';



const CountriesList = (props) => {

  const {data: countries, loading} =  useFetchCountries()
  //console.log(countries)
  return (
    <div className="col-5 height-div" >
        <div className="list-group">
        {
          countries.map((country) =>( 
            <li className="list-group-item list-group-item-action" key={country._id}>
              <Link  to={`/${country.alpha3Code}`}  >
                  {country.name.common} 
                </Link>
            </li>
              
              ))
        }
        </div>
    </div>
    );
};

CountriesList.propTypes = {};

export default CountriesList;
