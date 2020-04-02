import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";
function Details(props) {

  const getCountry = id => countries.find(obj => obj.cca3 === id);

  const { params } = props.match;

  const foundCountry = getCountry(params.id);

  return (
    <div className="row pr-5">
        <div className="col">
        
      <h1 className="text-center">{foundCountry.name.official}{foundCountry.flag}</h1>
      
            <div className = "list-group containerCountry ">
       
      </div>
      <div className = "list-group-item list-group-item-action text-center ">
      <p><b>Area:</b>  {foundCountry.area}Km</p>
      </div>
      <div className = "list-group-item list-group-item-action text-center">
      <p><b>Capital: </b>{foundCountry.capital}</p>
      </div>
      <div className = "list-group-item list-group-item-action text-center">
      <h4><b>Borders:</b></h4>
      </div>
      {foundCountry.borders.map(eachBorderCountry => {
          return(
        <div className = "list-group-item list-group-item-action text-center a">
            <Link key ={eachBorderCountry} to= {getCountry(eachBorderCountry).cca3}>
          <a>{getCountry(eachBorderCountry).name.common}{getCountry(eachBorderCountry).flag}</a>
          </Link>
          </div>
          )
      })}
      
      </div>
    </div>
  );
};

export default Details;
