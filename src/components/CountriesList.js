import React from "react";
import { Link } from "react-router-dom";
import countriesArray from "./../countries.json";

function CountriesList() {
    return (    
        <div className="d-flex flex-column align-items-center mt-5">
            <ul className="list-group w-50">
                {
                    countriesArray.map(country => {
                        return (
                            <li className="list-group-item">
                                <Link to={ "/" + country.alpha3Code }>{ country.name.common }</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>      
    );
}

export default CountriesList;