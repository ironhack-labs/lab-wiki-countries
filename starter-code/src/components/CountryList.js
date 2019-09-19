import React from "react";
import { Link } from "react-router-dom";

export default function CountryList({ countries, children }) {
  return (
    <div className="country_list_wrapper">
      <ul className="countries__list">
        {countries.map((country, index) => {
          return (
            <li key={index} className="countries__list__item">
              <img
                className="country-list__img"
                src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
              ></img>
              <Link
                className="country-link"
                to={{
                  pathname: `/${country.cca2}`
                }}
              >
                {country.name.common}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
