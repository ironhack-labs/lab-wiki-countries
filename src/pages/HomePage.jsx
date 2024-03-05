import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries`
      );
      console.log(response.data);
      setCountry(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (country === null){
    return <h3>...buscando</h3>
  }

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      <div className="list-group">
        {country.map((eachCountry) => {
          return (
            <div className="list-group-item list-group-item-action" key={eachCountry.name.common}>
                <Link to={`/${eachCountry.alpha3Code.toLowerCase()}`}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="flag" />
              {eachCountry.name.common}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
