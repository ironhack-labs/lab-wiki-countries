import React from 'react';
import Countries from "../countries.json";
import Country from '../components/Country';
import {Link, Route} from 'react-router-dom';
// import CSS

function CountryWiki() {
    return (
        
        <div>
        <h1>unfortunatelly its not working yet..</h1>
            <ul>
                {Countries.map((country)=> 
                        <li>
                            <Link to={`/country-wiki/country-detail/${country}`}>
                                {country.name.common}
                            </Link>
                        </li>
                    )
                }
            </ul>
            <div>
                <Route path="/country-wiki/country-detail/:name.common" component={Country}/>
            </div>
        </div>
    )
}


export default CountryWiki;