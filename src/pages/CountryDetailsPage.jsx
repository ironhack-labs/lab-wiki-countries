import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetailsPage({ className }) {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => {
        setCountry(response.data);
        console.log(response.data);
        console.log(country);
      });
    return () => {};
  }, [alpha3Code]);
  if (!country) {
    // Mientras los datos se cargan, muestra un indicador de carga
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Country Details Pages
      </p>

      <h1>{country.name.common}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td></td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              551695 km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders?.length > 0 ? (
                  country.borders.map((border) => (
                    <li key={border}>
                      <Link to={`/${border}`}>{border} </Link>
                    </li>
                  ))
                ) : (
                  <li>No borders available</li>
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetailsPage;
