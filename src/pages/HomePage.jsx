import  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Function to fetch countries data
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        console.log(response.data); 
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries data:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-5">WikiCountries: Your Guide to the World</h1>
          <ul className="list-group mt-3">
            {countries.map((country) => (
              <li key={country.alpha3Code} className="list-group-item">
                <Link to={`/${country.alpha3Code}`} className="d-flex align-items-center">
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt={`${country.name.common} flag`}
                    style={{ marginRight: '10px', width: '36px', height: '24px' }}
                  />
                  {country.name.common}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;