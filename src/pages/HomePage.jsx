import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function HomePage() {
  const [countries, setCountries] = useState([]);
  console.log("ici")
  useEffect(() => {
    console.log("useeffect")
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data)
      });
  }, []);

  return(
  <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
    <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
    <div className="list-group">
      {countries.map((country) => (
        <Link
        key={country.alpha3Code}
          className="list-group-item list-group-item-action"
          to={`/country/${country.alpha3Code}`}
        >  {country.name.common}
        <img src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
        </Link>
      ))}
    </div>
  </div>);
}

export default HomePage;
