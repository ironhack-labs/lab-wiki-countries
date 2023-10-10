import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = `https://ih-countries-api.herokuapp.com/countries`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in API:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="list-container"
      style={{ maxHeight: "600px", overflowY: "auto" }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="list-group pt-4">
          {data.map((country) => (
            <NavLink
              key={country._id}
              to={`/${country.alpha3Code}`}
              className={`list-group-item list-group-item-action`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`Flag ${country.name.common}`}
                style={{ maxHeight: "20px", paddingRight: "1rem" }}
              />
              {country.name.common}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
