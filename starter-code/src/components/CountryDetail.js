import React from "react";
import Countries from "../countries.json";
import { Link } from "react-router-dom";

const CountryDetail = props => {
  console.log(props);

  let foundCountry = Countries.find(item =>
    props.match.params.id.includes(item.name.common)
  );

  let { borders } = foundCountry;
  console.log();

  console.log(foundCountry);
  return (
    <div className="country-detail">
      <h1>{foundCountry.name.common}</h1>
      <div className="container">
        <div className="row">
          <div className="col">Capital</div>
          <div className="col">{foundCountry.capital}</div>
        </div>
        <div className="row">
          <div className="col">Area</div>
          <div className="col">{foundCountry.area} km2</div>
        </div>
        <div className="row">
          <div className="col">Borders</div>

          <div className="col">
            <ul>
              {borders.map((item, index) => (
                <li key={index}>
                  <Link to="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
