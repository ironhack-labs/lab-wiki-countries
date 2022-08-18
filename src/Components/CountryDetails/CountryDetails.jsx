import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetails(props) {
  const { countryId } = useParams;

  const linkedCountry = props.countries.find((country) => {
    return country.alpha3Code === countryId;
  });

  return (
    <div>
      <h3 className="list-group-item list-group-item-action">
        {linkedCountry.name.common}
      </h3>
    </div>
  );
}

export default CountryDetails;
