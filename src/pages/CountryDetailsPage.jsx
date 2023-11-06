import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CountryDetailsPage() {
  const { countryId } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setCountryData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data: ", error);
      });
  }, [countryId]);

  return (
    <div className="container">
      <p className="page-title">Country Details</p>
      {countryData ? (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`}
            alt={countryData.name.common}
          />
          <h1>{countryData.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{countryData.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryData.area} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {countryData.borders.map((border) => (
                    <div key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}