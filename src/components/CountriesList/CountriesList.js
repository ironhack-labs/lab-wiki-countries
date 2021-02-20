import React from "react";
import countries from "../../countries.json"
import {Route,Switch,Link} from "react-router-dom"
function CountriesList(){
    return(
        <ul className="list-group list-group-flush" style={{maxWidth:"500px", border:"1px solid #6c757d"}}>
            {
                countries.map((item,idx)=>
                    <li key={item.cca3} className="list-group-item">
                        <Link to={`/${item.cca3}`}>
                            {item.flag} {item.name.official}
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export default CountriesList;