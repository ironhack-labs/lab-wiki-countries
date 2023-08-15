import React, { useState, useEffect } from 'react';

const CountryDetails = ({ country }) => {
  const { name, alpha3Code, population, capital, region } = country;
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`);
        const data = await response.json();
        setCountryDetails(data);
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchCountryDetails();
  }, [alpha3Code]);

  return (
    <div className="container mt-4">
      <h2>{name} Details</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Country Code:</strong> {alpha3Code}
        </li>
        <li className="list-group-item">
          <strong>Population:</strong> {population}
        </li>
        <li className="list-group-item">
          <strong>Capital:</strong> {capital}
        </li>
        <li className="list-group-item">
          <strong>Region:</strong> {region}
        </li>
      </ul>

      {countryDetails && (
        <div>
          <h3>Additional Country Details</h3>
          <ul>
            <li>Area: {countryDetails.area}</li>
            <li>Languages: {countryDetails.languages.map(lang => lang.name).join(', ')}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;

