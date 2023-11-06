import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetailsPage() {
  const { countryId } = useParams();//the use params must use country id wich is the path in the App page
  const [countryData, setCountryData] = useState(null);
  const [fetching, setFetching] = useState(true); // Initialize fetching state

  useEffect(() => {
    // Fetch country data using axios based on the alpha3Code from the URL
    const apiUrl = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;

    axios.get(apiUrl)
      .then((response) => {
        setCountryData(response.data);
        setFetching(false); // Set fetching to false when data is received
      })
      
  }, [countryId]); /* confirmar isto*/






  return (
    <div>
      <ul>
        {fetching ? (<p>Loading...</p>) : (
          <li key={countryData._id}>
            <img
              className="flag-Name"
              src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`}
              alt={`${countryData.name.official} Flag`}
            />
            <h3>{countryData.name.official}</h3>
            <h2>Capital: {countryData.capital}</h2>
            <h2>Area: {countryData.area} sqm</h2>
            <h2>Borders: {countryData.borders.map((border) => border).join()}</h2>


            





          </li>
        )}
      </ul>
    </div>
  );
}

export default CountryDetailsPage;

