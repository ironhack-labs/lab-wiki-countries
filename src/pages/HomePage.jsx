import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function HomePage() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
        {countries && (
          <div className="list-group">
            {countries.map((country) => {
              return (
                <a
                  key={country._id}
                  className="list-group-item list-group-item-action"
                  href={`/${country.alpha3code}`}
                >
                  {country.name.common}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
