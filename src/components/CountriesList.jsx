import React from "react";
import { Link } from "react-router-dom";

export default function CountriesList( props) {
    if (props.countries)
    return props.countries.map((country) => {
        return (
<Link to={`/details/${country.alpha3Code}`}>
            <div className="list-group-item list-group-item-action" href="/ABW" style={{width: 538}}>
                    <div>
                        <img style={{width:20, margin:"10px"}} src={`https://flagpedia.net/data/flags/h80/${country.alpha2Code.toLowerCase()}.png`} alt="Flag"/>
                        {country.name.common}
                    </div>                                   
            </div>
            </Link>
        );
    });
    return <div>LOADING...</div>
    
}