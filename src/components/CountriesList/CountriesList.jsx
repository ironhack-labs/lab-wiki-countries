import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './CountriesList.css';

function CountriesList({ countries }) {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    setCountriesList(countries);
  }, [countries]);

  return (
    <div>
      {countriesList.map((country) => (
        <div key={country.alpha3Code} className="card">
          <div className="card-body">
            <div className="country">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.common} Flag`}
              />
              <h4>
                <Link to={`/${country.alpha3Code}`} style={{ color: 'black', textDecoration: 'none' }}>
                  {country.name.official}
                </Link>
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
