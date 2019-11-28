import React from "react";
import "./container.css";
import { Link } from "react-router-dom";
import countryData from './countries.json'

let className = "list-group-item list-group-item-action";

const Container = () => {
    return (
        <div className="countriesGroup col-5" >
            <div className="list-group">
                {countryData.map(el => {
                    return (
                        <Link className="list-group-item list-group-item-action btn" key={`${el.cca2}`} to={`/${el.cca3}`} data-toggle="buttons">
                            <img src={`https://www.countryflags.io/${el.cca2.toLowerCase()}/flat/64.png`} alt="country flag" /> {el.name.common}
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default Container;
