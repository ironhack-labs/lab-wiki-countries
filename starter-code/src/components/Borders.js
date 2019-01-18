import React from "react";
import { Link } from 'react-router-dom';

export const Borders = ({country, countryData}) => {
  return (
    <ul>
      {country.borders.map(borderCountry => {
        let index = countryData.findIndex(c => c.cca3 === borderCountry);
        return (
          <li key={borderCountry}>
            <Link to={"/" + borderCountry}>{countryData[index].name.official}</Link>
          </li>
        );
      })}
    </ul>
  );
};
