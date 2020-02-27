import React from "react";
import { Link } from "react-router-dom";
const CountryDetails = props => {
  return (
    <div className="improvedContactCard">
      <div class="list-group">
        <div>{props.capital}</div>
        <div>{props.area} km2</div>
        <div>
          Borders
          <ul>
            <li>
              <Link
                to={`${props.cca3}`}
                class="list-group-item list-group-item-action"
              >
                {props.borders}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
