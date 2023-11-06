import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CountryDetails() {
  const { countryId } = useParams();
  console.log(countryId);
  const [country, setCountry] = useState([]);

  const [fetching, setFetching] = useState(true);

  const apiURL = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      console.log(apiURL);
      setCountry(response.data);
      setFetching(false);
    });
  }, [countryId]);

  return (
    <div>
      <h1>Country Details</h1>

      {fetching ? (
        <p>Loading...</p>
      ) : (
        <div class="container">
          <p>Country Details</p>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
          />

          <h1>{country.name.common}</h1>

          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
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
                    {country.borders.map((border, index) => {
                      return (
                        <Link to={`/${border}`}>
                          <li>{border}</li>
                        </Link>
                      );
                    })}
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
