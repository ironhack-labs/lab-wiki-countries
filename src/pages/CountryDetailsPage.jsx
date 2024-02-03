import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function CountryDetails() {
  const [country, setCountry] = useState();
  const { countryId } = useParams();
  const [fetching, setFetching] = useState(true);
  console.log(countryId);
  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries/" + countryId)
      .then((country) => {
        console.log(country.data);
        setInterval(() => {
          setCountry(country.data);
          setFetching(false);
        }, 2000);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [countryId]);
  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
      {fetching && <p>Loading...</p>}
      {country && (
        <>
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
        </>
      )}
    </div>
  );
}

export default CountryDetails;
