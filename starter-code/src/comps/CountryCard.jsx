import React from "react";

export default function CountryCard(props) {
  return (
    <React.Fragment>
      <div>
        <h1>{props.theCountry.name.common}</h1>
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
        <b>Borders:</b> {props.theCountry.borders}
      </div>
    </React.Fragment>
  );
}
