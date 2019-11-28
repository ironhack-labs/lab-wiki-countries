import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import countries from "../countries";

const CountryDetail = props => {
  let rightBorders = props.borders.map(el => {
    return (
      <Link to={`/${el}`}>
        <li>{el}</li>
      </Link>
    );
  });

  return (
    <div>
      <tr>
        <td>Borders</td>
        <td>
          <ul>{rightBorders}</ul>
        </td>
      </tr>
    </div>
  );
};

export default CountryDetail;
