import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

export const CountryDetail = props => {
  const countriesList = countries;
  console.log(countriesList);

  const getcca3 = cca3 => countriesList.find(obj => obj.cca3 === cca3);

  const { params } = props.match;

  const foundCountry = getcca3(params.cca3);

  return (
    <div className="col-7">
      <div>
        <h1>{foundCountry.name.common}</h1>
        <div>
          <span>Capital</span> <span>{foundCountry.capital}</span>
        </div>
        <div>
          <span>Area</span>
          <span>
            {foundCountry.area} km<sup>2</sup>
          </span>
        </div>
        <div>
          <span>Borders</span>
          <div className="list-group">
            <ul>
              {foundCountry.borders.map((e, i) => (
                <li>
                  <Link to={`/${e}`} key={i}>
                    <p>
                      {countriesList.map(id => {
                        if (e === id.cca3) {
                          return id.name.common;
                        }
                      })}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
