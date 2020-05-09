import React from 'react';
import countries from "../countries.json";  
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    return (
      <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        <div className="list-group">
            {
            countries.map((element, key) => (
                <Link key={key} className="list-group-item list-group-item-action text-left" to={element.cca3}>
            
            <img className="flag" src={`https://www.countryflags.io/${element.cca2.toLowerCase()}/flat/64.png`} alt={element.cca3}/> {element.name.official}
          </Link>
            ))
            }
        </div>
      </div>
    );
}
