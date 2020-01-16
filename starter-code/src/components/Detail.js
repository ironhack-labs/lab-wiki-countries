import React from "react";
import Data from "../countries.json";
import Border from './Border'
import '../styles/Detail.css'

const Detail = props => {

  const country = Data.find(c => c.cca3 === props.match.params.id);

  const countryBorders = country.borders.map(c => <Border key={c} id={c}/>);

  return (
    <div className="">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{countryBorders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
