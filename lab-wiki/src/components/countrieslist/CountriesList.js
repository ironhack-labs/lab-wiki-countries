
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const CountriesList = ({countries}) => {
    return(
 <div>
        {countries.map((elm) => {
            return (  
        <div className="col-5" key={elm.cca3}>
          <div className="list-group">
            <a className="list-group-item list-group-item-action" href={`/${elm.cca3}`}>{elm.name.official}</a>            
          </div>
        </div>
            )}
            )}
            </div>
    )
}

export default CountriesList 