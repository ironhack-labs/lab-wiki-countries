
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => setCountries(data))
      .catch(error => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div>
       <nav className="navbar navbar-dark bg-primary mb-3"> 
        <div className="container"> 
          <Link className="navbar-brand" to="/">WikiCountries</Link> 
        </div> 
      </nav>    
      <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>  
        <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
        <div className="list-group">
          {countries.map(country => (
            <Link
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
              style={{ display: "flex", alignItems: "center", marginBottom: "10px", textDecoration: "none", color: "inherit" }}
            >
              <div style={{ textAlign: "center", flex: 1 }}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`Flag of ${country.name.common}`}
                  style={{ width: "50px", height: "35px", display: "block", margin: "0 auto" }}
                />
                <h5 style={{ marginTop: "10px", textAlign: "center" }}>{country.name.common}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
