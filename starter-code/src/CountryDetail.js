import React, { Component } from "react";
import { Link } from "react-router-dom";
import file from "./countries.json";

// export default class CountryDetail extends Component {
//   render() {
//     return (
//       <div>
//         <p>{this.country}</p>
//         <p>Capital: {this.capital}</p>
//         <p>Area: {this.area}</p>
//         <p>Borders: {this.borders}</p>
//       </div>
//     );
//   }
// }

const countryDetails = props => {
  const countryID = props.match.params.cca3;
  const countryObject = file.find(country => country.cca3 === countryID);

  return (
    <div>
      <h1>{countryObject.name.common}</h1>
      <p>Capital: {countryObject.capital}</p>
      <p>
        Area: {countryObject.area} km<sup>2</sup>
      </p>
      <p>
        Borders:
        <ul>
          {countryObject.borders.map(borderCCA3 => (
            <li>
              {
                file.find(countryInFile => countryInFile.cca3 === borderCCA3)
                  .name.common
              }
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default countryDetails;
