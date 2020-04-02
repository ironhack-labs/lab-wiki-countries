import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountryDetail = () => {
  const countyCopy = [...countries];
  // console.log(countyCopy.map((eachCountry, insex)=>{
  //     return eachCountry.flag
  // }))
  return (
    <div className="list">
      <div className="row d-flex ">
        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll", textAlign: "center" }}>
          <div className="list-group">
           <h2>Countries:</h2>
            {countyCopy.map(eachCountry => {
              return (
                <h4 key={eachCountry.cca3} className="list-group-item list-group-item-action">
                  <Link to={`/${eachCountry.cca3}`}>
                    {eachCountry.flag}
                    {eachCountry.name.official}</Link>
                  
                </h4>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetail;
