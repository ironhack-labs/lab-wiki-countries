import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import countries from '../countries.json';
import CountryDetails from '../components/CountryDetails'

//Hacemos una copia del array de countries para trabajar sobre ese mismo en vez de sobre el original
const countriesCopy = [...countries];

//
const CountryList = () => {


  return (
    <div className="countries">
      {/* Hacemos un map para recorrer todo el array de CountryList.*/}
      {countriesCopy.map((CountryList, index) => {
        return (
          <div key={CountryList.cca3}>
            <p>
              {/* Nos devuelve la bandera y el nombre */}
              <Link
                className="list-group-item list-group-item-action"
                to={`/${CountryList.cca3}`}
              >
                {CountryList.flag} {CountryList.name.common}
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CountryList;
