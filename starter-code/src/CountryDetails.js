import React from "react";
import countries from "./countries.json";
import {Link} from 'react-router-dom';

export default function CountryDetails(props) {
  const cca3 = props.match.params.cca3;
  const country = countries.find(c => c.cca3 == cca3);
  function getBorders() {
    let borders = country.borders;
    let theBorders = borders.map(border => (
      <ul>
        <li>{border}</li>
      </ul>
    ));
    let trueBorders = theBorders.filter(
      country => country.border === countries.cca3
    );
    return trueBorders;
  }
  console.log(cca3);
  function getCountryNameFromCca3(cca3) {
    console.log(cca3)
    let name = countries.filter(country => country.cca3 === cca3)
    .map(country=>(
      <Link to={"/"+cca3}>{country.name.common}</Link>
    ))
    return name
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <table className="table table-bordered ">
        <thead></thead>
        <tbody>
          <tr>
            <td
              style={{
                width: "30%"
              }}
            >
              {country.capital}
            </td>
            <td>
              Area : {country.area}km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders: </td>
            <td>
              {/* {getBorders()} */}

              {country.borders.map(cca3 =>(
                                <ul>
                                    <li>{getCountryNameFromCca3(cca3)}</li>
                                </ul> 
                               ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
