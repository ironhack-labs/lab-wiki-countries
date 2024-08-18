import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const CountryDetailsPage = () => {
  const { countryId } = useParams(); // Access the countryId from the URL
  const [country, setCountry] = useState(null); // State to hold country data
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Fetch country data from the API
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountry(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching the country data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [countryId]); // Effect runs when countryId changes

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  if (!country) {
    return <div>Country not found</div>; // Display message if country data is not available
  }

  return (
    <div className="container">
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</h1>
      <h2>{country.name.common}</h2>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={`${country.name.common} flag`}
      />
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area} km²</p>
      <p>
        Borders: 
        {country.borders.length > 0 ? (
          country.borders.map((border, index) => (
            <span key={border}>
              <Link to={`/${border}`}>{border}</Link>
              {index < country.borders.length - 1 && ', '}
            </span>
          ))
        ) : (
          'None'
        )}
      </p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
    </div>
  );
};

export default CountryDetailsPage;
