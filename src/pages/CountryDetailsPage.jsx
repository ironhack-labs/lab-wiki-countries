import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {
  const params = useParams();
  const [country, setCountry] = useState(null);

  async function fetchOneCountry() {
    try {
      const apiUrl = `https://ih-countries-api.herokuapp.com/countries/${params.countryId}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOneCountry();
  }, [params.countryId]);

  if (!country) {
    return <p style={{ fontSize: "24px", fontWeight: "bold" }}>Loading...</p>;
  }

  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      <h1>{country.name.common}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border) => {
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
