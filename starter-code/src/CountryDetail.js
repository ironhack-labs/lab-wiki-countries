import React from "react";
import { countriesList } from "./App";
import { Link } from "react-router-dom";

const countryDetails = props => {
  console.log(props);

  const getCountry = cca3 => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    };
    return countriesList.find(theCountry);
  };

  //same as const id = props.match.params.id
  const { params } = props.match;
  const foundCountry = getCountry(params.id);

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead />
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((eachBorder, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={`/countries/${eachBorder}`}
                        className="list-group-item list-group-item-action"
                      >
                        {getCountry(eachBorder).name.common}
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

export default countryDetails;
