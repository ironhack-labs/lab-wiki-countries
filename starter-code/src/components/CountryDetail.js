import React from "react";
import { countries } from "./CountryList";
import { Link } from "react-router-dom";

const CountryDetail = props => {
  const { id } = props.match.params;
  //   console.log(id);
  const countryInQuestion = countries.find(el => {
    //  console.log(el.cca3);
    return el.cca3 === id;
  });
  console.log(countryInQuestion);
  const borders = countryInQuestion.borders;
  console.log(borders);
  return (
    <div className='col-7'>
      <h1>{countryInQuestion.name.official}</h1>
      <table className='table'>
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{countryInQuestion.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{countryInQuestion.area} km^2</td>
          </tr>
          <td>Borders</td>
          <td>
            <ul>
              {borders.map(el => {
                const specific = countries.find(spec => {
                  return spec.cca3 === el;
                  console.log(spec);
                });

                return (
                  <li>
                    <Link to={`/${specific.cca3}`}>
                      {" "}
                      {specific.name.official}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
