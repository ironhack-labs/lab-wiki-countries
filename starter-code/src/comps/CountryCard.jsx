import React from "react";

import Countries from "../countries.json";

export default function CountryCard(props) {
  //   console.log(props.theCountry.borders);

  //   let final = props.theCountry.borders.map(b => {
  //     return Countries.find(co => co.cca3 === b).name.common;
  //   });
  //   console.log(final);

  return (
    <React.Fragment>
      <div>
        <h1>{props.theCountry.name.common}</h1>
        {props.theCountry.name.official}
      </div>
      <div>
        <b>Capital:</b> {props.theCountry.capital}
      </div>
      <br />
      <div>
        <b>Area:</b> {props.theCountry.area} km
      </div>
      <br />
      <div>
        <b>Borders:</b>
        <ul>
          {props.theCountry.borders.map(b => (
            <li>{Countries.find(co => co.cca3 === b).name.common}</li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
