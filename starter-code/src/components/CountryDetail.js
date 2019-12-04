import React from "react";
import countries from "../countries.json";

const myFuckingC = props => {
  const getCountry = id => countries.find(elm => elm.cca3 === id);
  const foundTheCountry = getCountry(props.match.params.cca3);
  return (
    <div class="col-7">
      <h1>{foundTheCountry.name.official}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundTheCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundTheCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {/* <ul>
                <li><a href="/AND">Andorra</a></li>
                <li><a href="/BEL">Belgium</a></li>
                <li><a href="/DEU">Germany</a></li>
                <li><a href="/ITA">Italy</a></li>
                <li><a href="/LUX">Luxembourg</a></li>
                <li><a href="/MCO">Monaco</a></li>
                <li><a href="/ESP">Spain</a></li>
                <li><a href="/CHE">Switzerland</a></li>
                </ul> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default myFuckingC;
