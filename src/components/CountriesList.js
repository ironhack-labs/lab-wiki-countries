import React from "react";
import { Link } from 'react-router-dom';

 const CountryList = (props) => {

  return (
    <div class="container">


      <div class="row">


        <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <div class="list-group">
      {props.countries.map((eachCountry, index) => {
        return (

            <Link class="list-group-item list-group-item-action" to={`/countries/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
        );
      })}
      </div>
      </div>
      </div>
      </div>
  );
};

export default CountryList