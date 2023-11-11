import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <h1>WikiCountries: Your Guide to the World</h1>
      <div className="list-group">
        {data.map((country) => (
          <div key={country.alpha3Code} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <img style={{ width: "100px" }} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common} Flag`} />
            <Link to={`/countries/${country.alpha3Code}`}>
              {country.name.common}
            </Link>
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
        ))}
      </div>
    </>
  );
}

export default HomePage;
