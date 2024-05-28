import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState(null);

  const getCountries = async () => {
    try {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <div className="container" style={{ maxHeight: "90vh" }}>
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>

        {countries ? (
          countries.map((country, index) => {
            return (
              <div key={index} className="list-group">
                <Link
                  to={`/countries/${country.alpha3Code}`}
                  className="list-group-item list-group-item-action"
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt=""
                    srcSet=""
                  />
                  <h5>{country.name.common}</h5>
                </Link>
              </div>
            );
          })
        ) : (
          <>
            <p>Loading...</p>
          </>
        )}
      </div>
    </>
  );
}

export default HomePage;
