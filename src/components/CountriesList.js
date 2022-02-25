import React from "react";
import { Link } from "react-router-dom";

function CountriesList(props) {
    return (    
        <div>
            <ul className="list-group">
                {
                    props.countries.map((country, index) => {
                        return (
                            <li key={ index } className="list-group-item">
                                <img src={ `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png` } alt={ country.name.common } ></img>
                                <br/>
                                <Link to={ `/${country.alpha3Code}` }>{ country.name.common }</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>      
    );
}

export default CountriesList;