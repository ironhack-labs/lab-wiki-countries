import React , {Component} from 'react';
import {Link} from "react-router-dom";
import countries from "../countries.json";

class CountryList extends Component {
    render(){
        return (
            <ul class="CountryList">
                {countries.map(oneCountry=>{
                    return(
                        <Link to={`/${oneCountry.cca3}`}>
                        <li key={oneCountry.cca3}>
                        <p>{oneCountry.flag}{oneCountry.name.common}</p>
                        </li>
                        </Link>
                    )
                })}
            </ul>
        );
    }
}

export default CountryList;