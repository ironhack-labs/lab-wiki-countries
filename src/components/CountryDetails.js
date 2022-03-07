 
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import countriesData from "../countries.json";
import {Routes, Route} from "react-router-dom";


function CountryDetails(props){
    // const[countries,setFoundCountry] = useState(props);
    const countries = props.countries;
    
    const {countryid} = useParams();
    let linkToFlag = '';
    let foundCountry = ''
    if(countryid){
        foundCountry = countries.filter((country) => country.alpha3Code === countryid);
        linkToFlag ='https://flagpedia.net/data/flags/icon/72x54/'+foundCountry[0].alpha2Code.toLowerCase()+'.png';
    }
    return(
        <div>
            {countryid &&
            <img src={linkToFlag} alt="flag" />
            }
            <h2>{countryid && foundCountry[0].name.common}</h2>
            <p>{countryid && foundCountry[0].capital}</p>
            <p>{countryid && foundCountry[0].area} km<sup>2</sup></p>
            <p>
                {countryid && 
                    foundCountry[0].borders.map((countryCode) => {
                        const borderCountries = countries.filter((oneCountry) => 
                            oneCountry.alpha3Code === countryCode
                        );
                        console.log(borderCountries);
                        
                        borderCountries.map((country) => {
                            return(
                                <h4>{country.name.common}</h4>
                            
                        )})
                    })
                }

            </p>
        </div>
    )
}

export default CountryDetails;