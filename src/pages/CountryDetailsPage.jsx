import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = `https://ih-countries-api.herokuapp.com/countries`;

function CountryDetails({ countries }) {
  const countryCode = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [country, setCountry] = useState({});

  console.log(countryCode);
  console.log(searchParams);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      const countries = response.data;
      const country = countries.find(
        (country) => country.alpha3Code === countryCode.countryId
      );
      setCountry(country);
    });
  }, [countryCode]);

  console.log(country);

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
                      <li key={border} style={{listStyleType: "none"}}>
                        <Link to={`/country/${border}`}>
                          <h3>{border}</h3>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          {/* 
          <img
            key={country._id}
            className="country-img"
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name.common}
          />
          <h3>Capital : {country.capital}</h3>
          <h3>Area : {country.area}km2</h3>
          <h3>
            Borders :{" "}
            {country.borders.map((border) => (
              <Link key={border} to={`/country/${border}`}>
                <h3>{border}</h3>
              </Link>
            ))}
          </h3> */}
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
