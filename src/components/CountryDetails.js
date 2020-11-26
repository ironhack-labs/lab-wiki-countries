import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = ({
  match: {
    params: { cca3 },
  },
}) => {
  const [country, setCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);

  // let borderCountries, country;
  const getData = async () => {
    const { data } = await Axios.get(
      'https://countries.tech-savvy.tech/countries'
    );

    let preCountry = data.filter((country) => country.cca3 === cca3)[0];
    setCountry(data.filter((country) => country.cca3 === cca3)[0]);
    setBorderCountries(
      data.filter((inner) => inner.borders.includes(preCountry.cca3))
    );
  };

  useEffect(() => {
    getData();
  }, [cca3]);

  return (
    <div className="">
      <h1 className="display-2">
        {country.name ? `${country.name.common} ${country.flag}` : ''}
      </h1>
      <hr />
      <div className="row">
        <div className="col-4">
          <p>Capital</p>
        </div>
        <div className="col-8">
          <p>{country.capital}</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">
          <p>Área</p>
        </div>
        <div className="col-8">
          <p>{country.area} km²</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">
          <p>Fronteras</p>
        </div>
        <div className="col-8 ">
          <ul className="p-0">
            {borderCountries.length ? (
              borderCountries.map((border) => (
                <li key={border.cca2}>
                  <Link to={`/country/${border.cca3}`}>
                    {border.name.common}
                  </Link>
                </li>
              ))
            ) : (
              <p>No tiene paises cerca.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
