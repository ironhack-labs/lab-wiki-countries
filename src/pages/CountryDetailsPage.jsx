import * as React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CountryDetailsPage() {
  // Get the countryId param from the URL.
  const [fetching, setFetching] = useState(true);
  const [foundCountry, setFoundCountry] = useState(null);
  let { countryAlpha3Code } = useParams();
  // ...
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ih-countries-api.herokuapp.com/countries"
        );

        const country = response.data.find((countryObj) => {
          return countryObj.alpha3Code === countryAlpha3Code;
        });
        if (country) {
          setFoundCountry(country);
          setFetching(false);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [countryAlpha3Code]);

  return (
    <div>
      {fetching && <p>Loading...</p>}
      {foundCountry && (
        <div className="container">
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            Country Details
          </p>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt={foundCountry.name.common}
            style={{ height: "40px", width: "55px", margin: "auto" }}
          />
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {foundCountry.borders.map((neighbour, index) => {
                      return (
                        <li key={index}>
                          <Link to={`/${neighbour}`}>{neighbour}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetailsPage;
