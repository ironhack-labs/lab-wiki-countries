import {useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountryDetails() {

    const [country, setCountry]= useState(null)

    const{countryId} = useParams()

    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        .then((selectedCountry)=>{
            
            
            setCountry(selectedCountry.data)

            console.log(selectedCountry.data)
        })
        .catch((err)=>{
            console.log(err)
        })
        console.log(country)

    },[countryId])

    if(!country){
        return <div>Loading...</div>
    }

    return(
        <div>
            <h2>Country Details</h2>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km²</p>
            <p>Borders: </p>
            {country.borders.map((oneBorder)=>{
                

                return(

                    <div key={oneBorder}>
                      <Link to={`/${oneBorder}`}>  <p> {oneBorder}</p></Link>
                         </div>
                )

            })}

        </div>
    )
}

export default CountryDetails;
