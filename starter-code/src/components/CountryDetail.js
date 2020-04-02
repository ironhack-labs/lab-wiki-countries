import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const CountryDetail = props => {
  const countryCopy = [...countries];
  return (
    <div className="pl-5">
      <div>
        <div
          className="col "
          style={{ maxHeight: "90vh", overflow: "scroll", textAlign: "center" }}
        >
            <h1 className="text-center pr-5">Countries List</h1>
          <div className="list-group containerCountry2 text-center">
            {countryCopy.map(eachCountry => {
              return (
                <a className="list-group-item">
                  <Link to={`/${eachCountry.cca3}`}>
                    {eachCountry.flag}
                    {eachCountry.name.official}
                  </Link>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetail;
