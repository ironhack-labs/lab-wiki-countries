import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage(props) {
  const { countries } = props;

  const countriesName = () => {
    return (
      <div className="countries">
        {countries.map((country, index) => (
          <div className="country" key={index}>
            <div>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="flag of country"
              />
            </div>
            <Link className="country-link" to={`/${country.alpha3Code}`}>
              {country.name.common}
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return <>{countries && countriesName()}</>;
}

export default HomePage;
