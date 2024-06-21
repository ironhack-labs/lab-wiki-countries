import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

function CountryDetailsPage() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountry(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the country data:", error);
        setLoading(false);
      });
  }, [countryId]);

  return (
    <div className="container">
      <h2 className="my-4">Country Details</h2>
      {loading ? (
        <div>Loading...</div>
      ) : !country ? (
        <div>No country data available</div>
      ) : (
        <>
          <h3>{country.name.common}</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.area} km²</td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul className="list-unstyled">
                    {country.borders.length > 0 ? (
                      country.borders.map((border) => (
                        <li key={border}>
                          <Link to={`/${border}`}>{border}</Link>
                        </li>
                      ))
                    ) : (
                      <li>No borders</li>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default CountryDetailsPage;
