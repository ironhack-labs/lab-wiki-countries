import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {

    const [countries,setCountries] = useState([])

    useEffect(()=>{
        axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then((countriesList)=>{
        setCountries(countriesList.data)
        console.log(countriesList.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return(
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>
            {countries.map((country)=>{
                return(
                <div key={country._id}>
                  <Link to={`${country.alpha3Code}`}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>
                    <p>{country.name.common}</p>
                  </Link>
                </div>
                 
                )
            })}
        </div>
    )
}

export default HomePage;
