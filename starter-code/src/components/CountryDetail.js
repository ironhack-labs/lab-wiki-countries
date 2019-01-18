import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const countryDetails = props => {
  console.log(props);

  const getCountry = cca3 => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    };
    return countries.find(theCountry);
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.cca3, 10);

  return (
    <div className="container">
      <div className="row">
        <div className="list-group">
          <div className="col-7">
            {countries.map((eachCountry, index) => {
              return (
                <div key={index}>
                  <Link
                    className="list-group-item list-group-item-action"
                    to={`/${eachCountry.cca3}`}
                    countries={countries}
                  >
                    {eachCountry.flag}
                    {eachCountry.name.common}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
              <ul className={foundCountry.borders.length < 1 ? "noBorders" : ""}>
                { foundCountry.borders.length < 1 ? <li className="noDisc">This country does not have any registered borders</li> : foundCountry.borders.map(b => <li key={b}><Link to={`/${b}`}>{getCountry(b).name.common}</Link></li>)}
              </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default countryDetails;
