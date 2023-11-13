import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const flagURL = "https://flagpedia.net/data/flags/icon/72x54/";

function HomePage() {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then((result) => {
          setCountries(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return (
      <>
        <div>
          <h1>Your guide to the world!</h1>
          {countries.map((country) => (
            <div key={country.alpha3Code}>
              <Link to={`/country/${country.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.name}
                />
                {country.name}
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default HomePage;