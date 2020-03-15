import React, {createContext, useState} from 'react';
import countriesJson from './../countries.json';

export const CountryContext = createContext();

const CountryContextProvider = (props) => {
  const [countries, setCountries] = useState(countriesJson);

  const findCountry = (cca3) => {
    return countries.find(country => country.cca3 === cca3);
  }

  return(
    <CountryContext.Provider value={{countries, setCountries, findCountry}}>
      {props.children}
    </CountryContext.Provider>
  );
}

export default CountryContextProvider;

