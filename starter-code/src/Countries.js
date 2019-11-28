import React from "react";
import { Link } from "react-router-dom";
import countriesData from "./countries.json";


const Countries = () => {
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countriesData.map(country => {
          return (
            <Link to={`/${country.cca3}`} key={country.cca3} className="list-group-item"  style={{display:"block", textDecoration:"none", color:"inherit", textAlign:"left"}}>
              {country.flag} {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
