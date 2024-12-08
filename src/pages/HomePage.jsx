import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function HomePage() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((countries) => {
        setCountryList(countries.data);
      })
      .catch((error) => console.error("error message", error));
  }, []);

  return (
    <div>
      <Navbar />

      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}>

        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>

        <div className="list-group">

          {countryList ? 
            countryList.map((country)=> {
              return (
                <Link 
                    className="list-group-item list-group-item-action" 
                    key={country.name.official} 
                    to={`/${country.alpha3Code}`}
                >
                    <img style={{ height: "15px", padding: "1px" }} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="Country flag" />
                    {country.name.official}
                </Link>
              )
            })
          : null}

        </div>
      </div>
    </div>
  );
}

export default HomePage;
