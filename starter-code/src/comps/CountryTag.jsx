import React from "react";

export default function CountryTag(props) {
  return (
    <a href="#" className="list-group-item list-group-item-action">
      {props.whichIS.name.common}
    </a>
  );
}
