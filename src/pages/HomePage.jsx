import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function HomePage() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries").then(function (response){
        setCountries(response.data);
        console.log(response.data);
      })
  }, []);

  return (
    <>
      <Navbar />
      {!countries ? <p>loading countries</p>
      :
      <div
        className="container"
        style={{maxHeight: "90vh", overflow: "scroll"}}
      >
        {countries.map(function (country) {
          return (
            <div key={country.alpha3Code} className="list-group"> {/* alpha3Code because it represents the country with 3 capital letters instead of 2, like FRA, DEU, BRA, instead of FR, DE, BR */}
              <Link
                to={`/${country.alpha3Code}`}
                className="list-group-item list-group-item-action"
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} // Using the url as a base and then using the country.alpha2Code to change to each one of the countries represented and putting lower case because the alpha2Code requires to be lowercase
                ></img>
                {country.name.common} {/* Using name.common because on the api the common names are in that specific object */}
              </Link>
            </div>
          );
        })}
      </div>
      }
    </>
  );
}

export default HomePage;