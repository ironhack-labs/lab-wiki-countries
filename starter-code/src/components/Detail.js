import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";


const ProjectDetails = props => {
  //console.log(props);

  const getCountry = id => countries.find(obj => obj.cca3 === id);

  const { params } = props.match;

  const foundCountry = getCountry(params.id);
    console.log(foundCountry)
  return (
    <div className="details">
        
        <h1>{foundCountry.flag}{foundCountry.name.official}</h1>
        <hr/>
        <h2>Capital: {foundCountry.capital}</h2>
        <hr/>
        <h2>Area: {foundCountry.area} Km<sup>2</sup></h2> 
        <hr/>
        {foundCountry.borders.map(eachBorderCountry => {
        return (
            <Link key={eachBorderCountry} to={`/${getCountry(eachBorderCountry).cca3}`}> {getCountry(eachBorderCountry).name.common} {getCountry(eachBorderCountry).flag}</Link>
            
        )
        })}
       
    </div>
  );
};

export default ProjectDetails;