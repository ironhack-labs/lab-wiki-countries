import React from 'react';
import countries from '../countries.json';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
    const { countriesId } = useParams();

    const foundCountries = countries.find((countries) => countries._id === countriesId);

  return (
    <div>
    
    <h3>Country Details</h3>

    {foundCountries && (
        <h3>{foundCountries.name.common}</h3>
    )}
    </div>
  )
}

export default CountryDetails