import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((response) => {
      console.log(response)
      setCountries(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
      <div className="list-group">
          {/* <a href="/" className="list-group-item list-group-item-action"
          >country listed</a> */}
          {countries.map((eachCountries) => {
            return(
              <Link to={`/${eachCountries.alpha3Code}`} key={eachCountries._id}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountries.alpha2Code.toLowerCase()}.png`} />
                <p className="list-group-item list-group-item-action"
                >{eachCountries.name.common}</p> 
              </Link>
            )
          })}
      </div>
    </div>
  );
}

export default HomePage;
