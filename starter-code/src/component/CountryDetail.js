import React from "react";
import Countries from "../countries.json";

export const CountryDetail = () => {
  const countryList = Countries.map(e => e.name);
  console.log(oneCountry);

  return (
    <div>
      <ul>
      { oneCountry = countryList.map(e => e.common);       
        <li>{oneCountry}</li>
      </ul>}
    </div>
  );
};
