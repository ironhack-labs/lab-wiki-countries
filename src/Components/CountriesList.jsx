import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './CountryDetails'
import { Route, Link, Switch } from "react-router-dom";

export default function CountriesList(props) {

    if (!props.isLoading) {
        console.log("still loading");
        return (<div>Loading</div>)
   }

    console.log(props.countries)
    return (
        <div className="col-5" styles={"max-height: 90vh; overflow: scroll;"}>
            <div className="list-group">
            
               
            {/* <a className="list-group-item list-group-item-action" href="/AFG">🇦🇫 Afghanistan</a> */}
                {props.Countries.map((el) => (
                    <Link key={el.name.common} className="list-group-item list-group-item-action" to={`/${el.cca3}`}>{el.cca2} {el.name.common}</Link>
                    
                ))}
               
               
          </div>
        </div>
    )
}
