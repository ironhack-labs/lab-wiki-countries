import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = `https://ih-countries-api.herokuapp.com/countries`;

function CountryDetails() {
  const countryCode = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      const countries = response.data;
      const country = countries.find(
        (country) => country.alpha3Code === countryCode.countryId
      );
      setCountry(country);
    });
  }, [countryCode]);

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>{" "}
      {Object.keys(country).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{country.name.common}</h1>
          <img
            key={country._id}
            className="country-img"
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name.common}
          />
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
                    {country.borders.map((border) => (
                      <li key={border} style={{ listStyleType: "none" }}>
                        <Link to={`/${border}`}>
                          <h3>{border}</h3>
                        </Link>
                      </li>
                    ))}
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

export default CountryDetails;
