import React from "react";
import countries from "../countries.json";
import { Route, Link } from "react-router-dom";

export default function Content() {
    return (
        <div className="row">
         <div className="col-5 mh-75-overflow-auto"></div>
          <div className="list-group">
            {countries.map(country => {
                return (
                    <p class="list-group-item list-group-item-action"><Link to = {`/${country.cca3}`} ><img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}/> {country.name.common}</Link></p>
                )
            })}
          </div>
        
        </div>
        )
}
