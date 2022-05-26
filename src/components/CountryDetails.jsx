import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { id } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => {
        setCountryDetails(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      {countryDetails && <h2>{countryDetails.name.common}</h2>}
      {countryDetails && (
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
          alt={countryDetails.name.common}
        />
      )}
    </div>
  );
}

export default CountryDetails;
