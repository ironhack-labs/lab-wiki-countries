import React from "react";
import countries from "./countries.json";
import { Link } from "react-router-dom";

const CountryDetail = props => {
  // console.log(props)
  const id = props.match.params.id;

  let foundcountries = countries.find(el => {
    return el.cca3 === id;
  });

  let borderArray = foundcountries.borders;

  let nameArray = [];

  borderArray.forEach(id => {
    countries.forEach(country => {
      if (id === country.cca3) {
        nameArray.push(country.name.official);
        return (foundcountries.borderName = nameArray);
      }
      console.log(foundcountries);
    });
  });

  console.log(borderArray);

  return (
    <div>
      <h1> {foundcountries.name.official}</h1>

      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{foundcountries.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundcountries.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundcountries.borders.map((el,i) => {
                  console.log(foundcountries.borders);
                  return (
                    <li>
                      <Link to={`/${el}`}>{foundcountries.borderName[i]}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
