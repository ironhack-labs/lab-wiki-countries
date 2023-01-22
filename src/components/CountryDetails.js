import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CountryDetails() {
  const [country, setCountry] = useState({});
  console.log(country);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => {
        console.log(response.data);
        setCountry(response.data);
      })
      .catch((e) => console.log("error getting data from API", e));
  }, [id]);

  return (
    <div className="col-6">
      {country.name ? (
        <div>
          <img
            src={
              `http://flagpedia.net/data/flags/icon/72x54/` +
              country.alpha2Code.toLowerCase() +
              `.png`
            }
            alt={country.name.common}
          />
          <h1>{country.name.official}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{country.capital[0]}</td>
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
                
                {country.borders.map((border, index) => {
                  return (
                    <Link to={`/${border}`} key={index}>
                      {border}{" "}
                    </Link>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p> waiting...</p>
      )}
    </div>
  );
}
export default CountryDetails;
