import React from "react";
import {Link, Route, Switch } from "react-router-dom";
import "./CountriesList.css"


function CountriesList(props){
    const arrayCountries = props.countries;
        
    return (
      
                    <div className="list-group">
                      {arrayCountries.map((elem)=>{
                          return(
                              <Link key = {`${elem.cca3}-list`} className="list-group-item list-group-item-action" to={`/${elem.cca3}`}
                            >{elem.flag} {elem.name.common}</Link>
                            )})}
                    </div>
       
    )
}

export default CountriesList;