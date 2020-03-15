import React, { createContext } from "react";
import countries from "../countries.json";

export const CountryContext = createContext();
export const CountryContextProvider = props => {
  const getCountry = code => countries.filter(c => c.cca3 === code)[0];

  return <CountryContext.Provider value={{ countries, getCountry }}>{props.children}</CountryContext.Provider>;
};
