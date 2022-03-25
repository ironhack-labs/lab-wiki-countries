import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CountriesList = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(props.props);
  }, [props.props]);

  return (
    <>
      {!countries ? (
        <p>Loading...</p>
      ) : (
        countries.map((country, index) => {
          return (
            <>
              <img
                key={index}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLocaleLowerCase()}.png`}
                alt="flag"
                style={{ width: '10%', paddingTop: '30px' }}
              />
              <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>
                <p style={{ paddingTop: '10px' }}>{country.name.common}</p>
              </Link>
            </>
          );
        })
      )}
    </>
  );
};
