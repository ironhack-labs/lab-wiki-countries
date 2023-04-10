import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();
  return (
    <div>
      {countries
        .filter((country) => country.alpha3Code === alpha3Code)
        .map((country) => (
          <div key={country.alpha3Code}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="flat img"
            ></img>
            <div className="d-flex flex-row">
              <h1>Capital:</h1>
              <h1 className="ms-5">{country.capital[0]}</h1>
            </div>
            <div className="d-flex flex-row">
              <h1>Area:</h1>
              <h1 className="ms-5">{country.area[0]} km²</h1>
            </div>
            <div className="d-flex flex-column">
              <h1>Borders:</h1>
              {countries
                .filter((country) => country.borders.includes(alpha3Code))
                .map((borders) => {
                  return (
                    <Link to={`/${borders.alpha3Code}`} key={borders.alpha3Code}>
                      <div className="list-group-item border-0">
                        {borders.name.common}
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        ))}
    </div>
  );
}

export default CountryDetails;
