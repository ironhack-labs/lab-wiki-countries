import {Link} from "react-router-dom";
import React from 'react'; 

export default function CountriesList(props) {
    const list = props.countries.map(country => {
        return (
                <Link
                className="list-group-item list-group-item-action"
                to={`/${country.cca3}`}
                key={country.cca3}
                >
                {country.name.common}
                </Link>
          )
    })
    return(
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            {list}
        </div>
    )
}


