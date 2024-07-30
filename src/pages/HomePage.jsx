import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>WikiCountries: Your Guide to the World</h1>
      <div className="row">
        {countries.map((country) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={country.alpha3Code}>
            <div className="card">
              <img
                src={`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`}
                className="card-img-top"
                alt={`Flag of ${country.name.common}`}
              />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <Link to={`/${country.alpha3Code}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
