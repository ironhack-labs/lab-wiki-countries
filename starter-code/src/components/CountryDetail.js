import React from "react";
import MyData from "../countries.json";

const CountryDetail = props => {
  const id = props.match.params.cca;
  console.log(id);

  const findDetails = MyData.find(el => {
    return el.cca3 === id;
  });

  const createBorders = () => {
    return findDetails.borders.map(el => {
      const borderName = MyData.find(eltwo => {
        return eltwo.cca3 === el;
      }).name.common;

      return <li>{borderName}</li>;
    });
  };

  console.log(findDetails);

  return (
    <div>
      <h3>{findDetails.name.common}</h3>
      <table>
        <tr>
          <td>Capital:</td>
          <td>{findDetails.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{findDetails.area}km</td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>{createBorders()}</ul>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CountryDetail;
