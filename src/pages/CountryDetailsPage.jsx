import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import countriesData from "../data/countries.json";

function CountryDetailsPage() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const baseUrl = "https://ih-countries-api.herokuapp.com";

  useEffect(() => {
    axios
      .get(`${baseUrl}/countries/${countryId}`)
      .then((response) => setCountry(response.data))
      .catch((error) =>
        console.error("Error fetching individual country data", error)
      );
    // const foundCountry = countriesData.find((c) => c.alpha3Code == countryId);
    // setCountry(foundCountry);
  }, [countryId]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {country && (
        <>
          <h1>Country Details</h1>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name.common}
            style={{ width: "80px", margin: "10px" }}
          />
          <h2>{country.name.common}</h2>
          <table className="table">
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
                    {country.borders.map((border) => (
                      <li key={border}>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    ))}
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
