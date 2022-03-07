 
import { useState, useEffect } from "react";
// import countries from "../countries.json";

import CountryDetails from "./CountryDetails";
import {Routes, Route} from "react-router-dom";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CountriesList(props){

    //const[countries,setCountries] = useState([])
    
     /* useEffect(() => {
        setCountries(props.countries);
    }, [props.countries]) */
    const countries = props.countries;
    const {countryid} = useParams();

    if(countryid){
        console.log('I have country id');
    }
    return(
        <div>
            <h2>Country List</h2>
            <CountryDetails countries={countries} />
            {countries.map((country) => {
                let linkToFlag='https://flagpedia.net/data/flags/icon/72x54/'+country.alpha2Code.toLowerCase()+'.png';
                console.log('linkToFlag');
                return(
                    <h3>

                        <img src={linkToFlag} alt="flag"/>
                        
                        <Link to={`/${country.alpha3Code}`}>
                            {country.name.common}
                        </Link>
                    </h3>

                )})
            }
            
           {/*  <Routes>
                <Route 
                    path="/:countryid"
                    element={<CountryDetails countries={countries}/>}
                />
            </Routes> */}
        </div>
    )
}

export default CountriesList;