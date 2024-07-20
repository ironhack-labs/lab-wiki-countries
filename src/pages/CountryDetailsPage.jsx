
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CountryDetailsPage = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => setCountry(data))
      .catch(error => console.error("Error fetching country details:", error));
  }, [countryId]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">WikiCountries</Link>
        </div>
      </nav>

      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
        <img 
        
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={`Flag of ${country.name.common}`} 
        style={{ width: "50px", height: "35px", display: "block", margin: "0 auto" }} />   
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
                  {country.borders.map(border => (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CountryDetailsPage;
