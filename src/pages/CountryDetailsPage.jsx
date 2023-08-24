import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CountryDetailsPage(props) {
  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([]);
  const [foundCountry, setFoundCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId} `)
      .then((response) => {
        setFoundCountry(response.data);
        setFetching(false);
        console.log(response.data);
      })
      .catch((error) => {
        setFetching = true;
      });
  }, [countryId]);

  return (
    <div className="container">
      <h4 style={{ fontSize: "24px", fontWeight: "bold}" }}>Country Details</h4>
      {!foundCountry && <h3>Country not found!</h3>}
      {foundCountry && (
        <div>
          <h2>{foundCountry.name.common}</h2>
          <table className="table">
            <img src="" alt="" />
            <h3 style={{ width: "30%" }}>Capital: {foundCountry.capital}</h3>
            <h3 style={{ width: "30%" }}>Area: {foundCountry.area} km²</h3>
            <div>
              {foundCountry.borders.map((border) => {
                return <Link to={`/${border}`}>{border}</Link>;
              })}
            </div>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetailsPage;
