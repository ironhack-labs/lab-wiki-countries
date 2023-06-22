import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const [country, setCountry] = useState(null);

  const { countryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
        {!country ? (
          <div>Loading...</div>
        ) : (
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
                    <ul style={{ listStyle: "none" }}>
                      {country.borders.map((border) => (
                        <li key={border}>
                          <a href={`/${border}`}>{border}</a>
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
    </>
  );
}

export default CountryDetails;
