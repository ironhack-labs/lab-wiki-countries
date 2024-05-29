// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  let { countryId } = useParams();
  const [country, setCountry] = useState(null);
  async function getCountryDetails() {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${countryId}`
      );
      console.log("this is the data from the api call ==>", response);
      setCountry(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCountryDetails();
  }, [countryId]);

  return (
    <div>
      {country ? (
        <>
          <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              Country Details
            </p>

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
                      {country.borders.length ? (
                        country.borders.map((border) => (
                          <li key={border}>
                            <Link to={`/${border}`}>{border}</Link>
                          </li>
                        ))
                      ) : (
                        <p>This country has no borders</p>
                      )}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>🕐Loading</p>
      )}
    </div>
  );
}

export default CountryDetails;
