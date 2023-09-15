import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CountryDetailsPage() {
  const { alpha3Code } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {

    const countryURL = `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`;

    axios.get(countryURL)
      .then((response) => {
        setCountryData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }, [alpha3Code]);

  return (
    <div>
      <h1>Country Details</h1>
      <br/>

      <h2>{countryData.name.common}</h2>
      <p>Capital: {countryData.capital}</p>
      <p>Area: {countryData.area} square kilometers</p>
    </div>
  );
}

export default CountryDetailsPage;
