import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
  
  const [showCountries, setShowCountries] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setShowCountries(response.data);
   
    });
  }, []);
  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      {showCountries.map((oneCountry) => {
        console.log(oneCountry);
        return (
           
 
          <Link to={`/${oneCountry.alpha3Code}`} key={oneCountry._id}>
            <span>
              <p>{oneCountry.name.common}</p>
            </span>
          </Link>
         
        );
      })}
    </div>
  );
}

export default HomePage;
