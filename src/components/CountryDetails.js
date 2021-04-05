import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const [country, setcountry] = useState();
  const [loading, setloading] = useState(true);

  const cca3 = props.match.params.code;
  const countries = props.countries;

  useEffect(() => {
    setcountry(countries.find((c) => c.alpha3Code === cca3));
    setloading(false);
  }, [country, cca3, countries]);

  return (
    <Fragment>
      {loading ? (
        'Loading'
      ) : (
        <div className="CountryDetails">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h1>{country.name}</h1>
            </li>
            <li className="list-group-item">
              <strong>Capital: </strong> {country.capital}
            </li>
            <li className="list-group-item">
              <strong>Area: </strong> {country.area} Km2
            </li>
            <li className="list-group-item">
              <strong>Borders: </strong>
            </li>
            <ul>
              {country.borders.length > 0 ? (
                country.borders.map((borderCity) => {
                  return (
                    <li key={borderCity}>
                      <Link to={`/${borderCity}`}>
                        {
                          countries.find((c) => c.alpha3Code === borderCity)
                            .name
                        }
                      </Link>
                    </li>
                  );
                })
              ) : (
                <Link to={'/'}>No borders, go back home</Link>
              )}
            </ul>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default CountryDetails;
