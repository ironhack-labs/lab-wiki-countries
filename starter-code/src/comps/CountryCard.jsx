import React from "react";

export default function CountryCard(props) {
  return (
    <React.Fragment>
      <div>{props.theCountry.name.common}</div>
      <div></div>
    </React.Fragment>
  );
}
