import React from "react";
import countries from "../countries.json";
import { ListItem } from "./ListItem.js";

export const CountryDetail = ({ match }) => {
  const { code } = match.params;
  let country;
  countries.forEach(e=>{if(e.cca3==code){country=e}})
  const {name,capital,area,borders}=country
  return (
    <div class="col-7">
      <h1>{name.official}</h1>
      <table class="table">
        <thead />
        <tbody>
          <tr>
            <td width="30%;"></td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countries.filter(e=>borders.includes(e.cca3)).map(e=><ListItem data={e}></ListItem>)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
