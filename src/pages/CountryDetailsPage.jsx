import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetailsPage() {
  const [country, setCountry] = useState({});
  const { alpha3Code } = useParams();

  const [borders, setBorders] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    if (alpha3Code) {
      axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then((response) => {
          setCountry(response.data);
          setBorders(response.data.borders);
          console.log(alpha3Code);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [alpha3Code]);

  const fetchBorderCountries = async () => {
    try {
      const borderCountriesData = await Promise.all(
        borders.map((border) =>
          axios.get(
            `https://ih-countries-api.herokuapp.com/countries/${border}`
          )
        )
      );
      setBorderCountries(borderCountriesData.map((response) => response.data));
    } catch (error) {
      console.error("Error fetching border countries:", error);
    }
  };

  useEffect(() => {
    if (borders.length > 0) {
      fetchBorderCountries();
    }
  }, [borders]);

  return (
    <div>
      {country ? (
        <div>
          <h1>{country.name?.common}</h1>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country?.alpha2Code?.toLowerCase()}.png`}
            alt=""
            style={{ width: "30px", marginRight: "10px" }}
          />
          <table className="table">
            <thead>
              <tr>
                <th>Capital</th>
                <td>{country?.capital?.[0]}</td>
              </tr>
              <tr>
                <th>Area</th>
                <td>
                  {`${country.area}`} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <th>Borders</th>
                <td>
                  {borderCountries.length > 0 ? (
                    <ul>
                      {borderCountries.map((country) => (
                        <li key={country.alpha3Code}>
                          <Link to={`/country/details/${country.alpha3Code}`}>
                            {country.name.common}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No bordering countries.</p>
                  )}
                </td>
              </tr>
            </thead>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CountryDetailsPage;
