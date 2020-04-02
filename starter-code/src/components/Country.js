import React from "react";
import countries from "../countries.json";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Css from "../App.css";

function Country(props) {
  const getCountry = id => countries.find(obj => obj.cca3 === id);

  const { params } = props.match;

  const foundCountry = getCountry(params.id);
console.log(foundCountry)
  return (
    <span className="countryDetails">
      <div className="col">
        <h1>
          {/* {foundCountry.flag} */}
          {foundCountry.name.official}<hr/>
        </h1>
        
        <h5>Capital:<span className="jsonData"> {foundCountry.capital}</span></h5>
        <hr />
        <h5>Area: <span className="jsonData">{foundCountry.area} km<sup>2</sup></span></h5>
        <hr />
        <h5>Borders:</h5>
        {foundCountry.borders.map(eachBorderCountry => {
          return (
              <Link to={getCountry(eachBorderCountry).cca3}>
                <div className="List">   
              {getCountry(eachBorderCountry).name.official}
              </div>
            </Link>
          );
        })}
     
      </div>
    </span>
  );
}

export default Country;
