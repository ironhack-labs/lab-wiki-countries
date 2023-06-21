import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const [country, setCountry] = useState(null);

  const { countryId } = useParams(); // {countryId: 1156,}

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        console.log(response.data);
        setCountry(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
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
                      <li>
                        <a href="/AND">Andorra</a>
                      </li>
                      <li>
                        <a href="/BEL">Belgium</a>
                      </li>
                      <li>
                        <a href="/DEU">Germany</a>
                      </li>
                      <li>
                        <a href="/ITA">Italy</a>
                      </li>
                      <li>
                        <a href="/LUX">Luxembourg</a>
                      </li>
                      <li>
                        <a href="/MCO">Monaco</a>
                      </li>
                      <li>
                        <a href="/ESP">Spain</a>
                      </li>
                      <li>
                        <a href="/CHE">Switzerland</a>
                      </li>
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
