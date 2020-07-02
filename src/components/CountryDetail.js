import React from 'react';
import { Link } from "react-router-dom";
import countries from "../countries.json"



const CountryDetail = props => {
	


	function determineName(code) {
	    let c = countries.find((e) => {
	      return e.cca3 === code;
	    });
	    return c.name.common;
	  }

  function listBorders() {
    return [...props.country.borders].map((b) => {
      return (
        <li key={b}>
          <Link to={'/' + b}>{determineName(b)}</Link>
        </li>
      );
    });
  }

  return (
    <div className="col-7">
      <h1>{props.country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{props.country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {props.country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{listBorders()}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail
