import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-countries-api.herokuapp.com";

function CountryDetails() {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();

  const getCountry = () => {
    axios
      .get(`${API_URL}/countries/${countryId}`)
      .then((response) => setCountry(response.data))
      .catch((err) => console.log("Error fetching country data:", err));
  };

  useEffect(() => getCountry(), [countryId]);

  if (!country) {
    return (
      <>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              WikiCountries
            </Link>
          </div>
        </nav>
        <div className="container">
          <p>Loading country details…</p>
        </div>
      </>
    );
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>

      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

        <h1>{country.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((border, i) => {
                    return (
                      <li key={i}>
                        <a href={`/${border}`}>{border}</a>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CountryDetails;
