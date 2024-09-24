import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setCountries(null);

    try {
      const response = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (countries === null) {
    return <div>Cargando...</div>;
  }

  console.log(countries);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      {countries.map((eachCountry, index) => {
        return (
          <div className="list-group" key={index}>
            <Link
              to={`/${eachCountry.alpha3Code}`}
              className="list-group-item list-group-item-action"
            >
              <img
                style={{ width: "20px" }}
                src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                alt="icon"
              />
              <p>{eachCountry.name.common}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
