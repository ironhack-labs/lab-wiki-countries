import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import countriesFromJson from "../countries.json"
import CountryDetails from './CountryDetails';

function CountriesList() {

    const [countriesArray, setCountriesArray] = useState(countriesFromJson);


    return (
        <>
            <div className="col-5" style={{maxHeight: 90 + 'vh', overflow: "scroll"}}>
                <div className="list-group">
                    
                    {countriesArray.map((country, index) => {
                        return(
                        <Link to={'/' + country.alpha3Code} className="list-group-item list-group-item-action" key={index}>
                            <img src={"https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png"} alt=""/>          
                            <p>{country.name.common}</p>
                        </Link>
                        )
                    })}

                </div>
            </div>

            
        </>
    );
}

export default CountriesList;
