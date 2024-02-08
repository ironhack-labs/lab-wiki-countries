import { useEffect, useState } from "react";
import { getCountries } from "../services/countryService.js";
import ListItem from "../components/ListItem/ListItem.jsx";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries()
      .then((countriesApi) => {
        setCountries(countriesApi);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Wiki Countries 🌍</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {countries.map((country) => (
          <div key={country.name.common} className="col">
            <div className="card">
              <ListItem country={country} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
