import React from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';


const CountriesList = ({ countries }) => {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                    <div className="list-group">
                        {countries && countries.map((country) => {
                            return (
                                <div key={`${country.alpha3Code}`} >
                                    <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                                        <img src = {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country's flag"/> 
                                        <br></br>
                                        {country.name.common}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <CountryDetails countries={countries}/>
            </div>
        </div>
    )
}

export default CountriesList