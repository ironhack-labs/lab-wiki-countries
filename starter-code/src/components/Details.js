import React from "react";
import countries from "../countries.json"
import { Link } from "react-router-dom"

const Details = (props) => {
 
    let myCountry = countries.filter(country => props.match.params.id === country.cca3)[0]
    
    const countryByCode = (code) => {
        return countries.filter(country => country.cca3 === code)[0].name.common;
    }

    return (
    
        <div className="col-7">
            <h2>{myCountry.name.common}</h2><hr/>
            <div className="row">
                <div className="col-6 left">
                    <h3>Capital: </h3>
                </div>
                <div className="col-6 right">
                    <h3>{myCountry.capital}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-6 left">
                    <h3>Area: </h3>
                </div>
                <div className="col-6 right">
                    <h3>{myCountry.area} km²</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-6 left">
                    <h3>Borders: </h3>
                </div>
                <div className="col-6 right">
                    <ul>
                    {myCountry.borders.map((bordersItem, idx) => 
                        <li key={idx}><Link to={`/${bordersItem}`}>{countryByCode(bordersItem)}</Link></li>
                    )}
                    </ul>
                </div>
            </div>
            {/* <div className="row">
                    {myCountry.flag}
            </div> */}

        </div>
    
    )
};

export default Details;
  


