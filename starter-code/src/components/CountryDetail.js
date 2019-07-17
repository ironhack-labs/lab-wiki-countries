import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const CountryDetail = props => {
  console.log(props, countries);

  let code = props.match.params.cca3;
  let country = countries.find(el => el.cca3 === code); // replace this line

  return (
    <div>
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td>Capital</td>
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
              <ul>
                {country.borders.map((el, index) => {
                  let linkedCo = countries.find(co => co.cca3 === el);
                  return (
                    <li key={index}>
                      <Link to={`/countries/${el}`}>
                        {linkedCo.name.common}
                      </Link>
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
