import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { countryId } = useParams();
  return (
    <div>
      <h1>CountryDetails</h1>
      <p>{countryId}</p>
    </div>
  );
}

export default CountryDetails;
