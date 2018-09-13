import React from "react";
import { withRouter } from "react-router";
import Borders from "./Borders";


const Details = props => {
  const matchedCountry = props.countries.filter(el => {
    return props.match.params.id === el.cca3;
  });

  const borders = []

  matchedCountry[0].borders.forEach(border => {
      props.countries.forEach(country => {
          if (country.cca3 === border)
          borders.push({name : country.name.common, id: country.cca3})
      })
  })


  return (
    <div className="details">
      <h1>{matchedCountry[0].name.common}</h1>
      <table>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{matchedCountry[0].capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{`${matchedCountry[0].area} km2`}</td>
          </tr>
          {borders.length !== 0 && <tr>
             <td>Borders</td>
            <Borders borders={borders} />
          </tr>}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(Details);
