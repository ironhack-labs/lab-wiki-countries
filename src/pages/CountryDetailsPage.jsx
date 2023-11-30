import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function CountryDetailsPage() {
  const { countryId } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${countryId}`
      );
      setCountryData(response.data);
      setLoading(false);
    };

    fetchCountryData();
  }, [countryId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : countryData ? (
        <>
          <h1>{countryData.name.common}</h1>
          <p>Capital: {countryData.capital}</p>
          <p>Area: {countryData.area} km²</p>
          <div>
            <h3>Borders:</h3>
            <ul>
              {countryData.borders.map((border, index) => (
                <li key={index}>
                  <Link to={`/${border}`}>{border}</Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default CountryDetailsPage;
