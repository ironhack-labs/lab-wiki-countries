import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState({});

  const { countryId } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://ih-countries-api.herokuapp.com/countries/${countryId}`,
    }).then(function ({ data }) {
      const parsedData = {
        name: data.name.common,
        borders: data.borders,
        area: data.area,
        capital: data.capital,
        countryCode: data.alpha3Code,
        flagCode: data.alpha2Code.toLowerCase(),
      };

      setCountryDetails(parsedData);
    });
  }, [countryId]);

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      <h1>{countryDetails.name}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            {countryDetails.capital?.map((capital) => (
              <td key={capital}>{capital}</td>
            ))}
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetails.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryDetails.borders?.map((border) => (
                  <li key={border}>
                    <Link to={`/${border}`}>{border}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
