import React from 'react'
import { Link } from "react-router-dom"


const CountriesList = ({ countries }) => {
    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
    {/* { below we map through each country in order to link them } */}
    {countries.map(country => {
        return (
            <Link key={country.alpha3Code} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common} Flag`} /> 
                {country.name.common} 
            </Link>
        );
    })}
            </div>
        </div>
    );
};

export default CountriesList;
// its important to remember in order to link things u need to import { Link} from react-router-dom
// and also cincat it in the < Link /> 


