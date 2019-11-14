import React from "react";

export default function CountryTag(props) {
  return (
    <button
      className="list-group-item list-group-item-action"
      onClick={props.click}
      key={props.id}
    >
      {props.name}
    </button>
  );
}
