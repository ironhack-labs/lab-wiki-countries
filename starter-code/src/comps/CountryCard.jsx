import React from "react";

export default function CountryCard(props) {
  return (
    <React.Fragment>
      <h1>{props.whichIs.name.common}</h1>
    </React.Fragment>
  );
}
