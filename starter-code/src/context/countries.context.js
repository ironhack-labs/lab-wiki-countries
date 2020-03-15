import React, { createContext, useState } from "react";
import countriesList from "../countries.json";

export const CountryContext = createContext();
export const CountryContextProvider = props => {
  const [countries, setCountries] = useState(countriesList);
  return <CountryContext.Provider value={{ countries }}>{props.children}</CountryContext.Provider>;
};
