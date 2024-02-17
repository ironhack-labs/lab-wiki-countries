import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries ")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data[0]._id);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1 style={{ fontSize: "20px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      {countries.map((country) => {
        return (
          <div key={country._id} className="list-group">
            {/* <a
              className="list-group-item list-group-item-action"
              href={country.alpha3Code}
            >
              {country.name.common}
            </a> */}
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
              style={{ height: "20px", width: "30px" }}
            />
            <Link to={country.alpha3Code}>{country.name.common}</Link>

            {/* <p>${apartment.pricePerDay}</p> */}
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
