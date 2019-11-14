import React from "react";

export default function CountryTag(props) {
  return (
    <React.Fragment>
      <button
        className="list-group-item list-group-item-action"
        onClick={props.click}
        key={props.id}
      >
        {props.theCountry.name.common}
      </button>
    </React.Fragment>
  );
}
