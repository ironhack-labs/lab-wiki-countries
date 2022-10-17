import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = () => {
  const [country, setCountry] = useState(null);
  const { alpha3Code } = useParams();

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => response.json())
      .then((data) => setCountry(data))
  }, [alpha3Code])

  if (country === null) {
    return <p>No hay pais</p>;
  }

  const { name, capital, area, borders, alpha2Code } = country;
  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/144x108/${alpha2Code.toLowerCase()}.png`}
        alt={name}
      />
      <h1>{name.official}</h1>
      <p>Capital {capital}</p>
      <hr />
      <p>Area {area} km2</p>
      <hr />
      <p>
        Borders{' '}
        {borders.map((border) => {
          return (
            <div>
              <Link to={`/${border}`}>{border}</Link>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default CountryDetails;