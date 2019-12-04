import React from "react";
import { Link } from "react-router-dom";

function Country(props) {
  return (
    <div>
      <img src={props.flag} alt={props.name.common} />
          <Link to={props.cca3}>{props.name.common} </Link>
    </div>
  );
}

export default Country;
