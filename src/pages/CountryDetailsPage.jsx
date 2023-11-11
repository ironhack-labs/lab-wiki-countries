import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetailsPage() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }, [alpha3Code]);

  if (!country) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Country Details</h1>
      <div>
        <img style={{ width: "100px" }} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common} Flag`} />
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} sq km</p>
        <p>Borders:</p>
        <div>
          {country.borders.map((border) => (
            <Link key={border} to={`/countries/${border}`}>
              {border}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CountryDetailsPage;
