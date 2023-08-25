import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  // State declarations
  const [countries, setCountries] = useState([]);
  // Fetching
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(" https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
        setFetching(false);
      });
  }, []);
  return (
    <div>
      <h2>WikiCountries: Your Guide to the World</h2>
      {fetching && <img src="https://i.gifer.com/Z0Bj.gif"></img>}
      {countries.map((country) => {
        return (
          <div key={country._id}>
            <div className="container mb-2">
              <div className="row-7 d-flex justify-content-center">
                <div className="col-3 d-flex justify-content-end">
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    width={30}
                    height={20}
                  />
                </div>
                <div className="col-4 d-flex">
                  <Link to={`/${country.alpha3Code}`}>
                    {country.name.official}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
