import {useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountryDetails() {

    const [country, setCountry]= useState(null)

    const{alpha3Code} = useParams()

    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then((selectedCountry)=>{
            
            setCountry(selectedCountry.data)

            //console.log(selectedCountry.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[alpha3Code])

    if(!country){
        return <div>Loading...</div>
    }

    return(
        <div>
            <h2>Country Details</h2>
            <h3>Name: {country.name.common}</h3>
        </div>
    )
}

export default CountryDetails;
