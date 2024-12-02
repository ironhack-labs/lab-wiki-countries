import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CountryDetails() {
  let { countryId } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountryData(response.data);
      });
  }, [countryId]);

  if (!countryData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`}
      ></img>
      <h1>{countryData.name.common}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{countryData.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryData.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryData.borders.map((country) => (
                  <li key={country}>
                    <Link to={`/${country}`}>{country}</Link>
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
