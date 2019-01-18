import React from "react";

export const Borders = ({country, countryData}) => {
  return (
    <ul>
      {country.borders.map(borderCountry => {
        let index = countryData.findIndex(c => c.cca3 === borderCountry);
        return (
          <li key={borderCountry}>
            <a href={"/" + borderCountry}>{countryData[index].name.official}</a>
          </li>
        );
      })}
    </ul>
  );
};
