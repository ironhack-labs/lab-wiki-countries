import React from 'react';
import countriesData from '../countries.json';
import { useParams } from 'react-router-dom';


function CountryDetailsPage(props) {
  const { countriesId } = useParams();

  const foundCountries = countriesData.find((countries) => countries._id === countriesId);

  return (
    <div>
      <h1>Country Details</h1>

      

      {foundCountries && (
        <>
          <h2>{foundCountries.name}</h2>
          <h3>Alpha3Code: {foundCountries.alpha3code}</h3>
          <p>{foundCountries.description}</p>
        </>
      )}
    </div>
  );
}

export default CountryDetailsPage;


