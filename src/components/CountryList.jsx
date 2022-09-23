import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios'


const CountriesList = () => {
    const [countries, setCountries] = useState([])

    const apiURL = 'https://ih-countries-api.herokuapp.com/countries'

    useEffect(() => {
     axios.get(apiURL).then(response=>{
        setCountries(response.data)
     }).catch(err => console.log(err));
    }, [])
    
  return (
    <div>
        <div className='countriesList'>
        {countries.map((country,i)=>{
            return (
                <Link key={i} className="list-group-item list-group-item-action" to={country.alpha3Code}>
                    <div className="countryCard">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="altImg"/>
                    
                        <p>{country.name.official}</p>
                    </div>
                </Link> 
                )
        })}
            
        </div>    
    </div>
    
  )
}

export default CountriesList