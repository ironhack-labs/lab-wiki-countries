import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {

    const [countries,setCountries] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    

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

    const filteredCountries = countries.filter((country)=> country.name.common.toLowerCase().startsWith(searchQuery.toLowerCase()))

    function handleChange(e){
        setSearchQuery(e.target.value)
    }

    return(
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>
            <input
         type="text"
         placeholder="Search countries..."
         value={searchQuery}
         onChange={handleChange}
         />
            {filteredCountries.map((country)=>{
                return(
                <div key={country._id} className="border border-light shadow p-3 mb-5 bg-white rounded">
                  <Link style={{textDecoration:"none"}} to={`${country.alpha3Code}`}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}></img>
                    <p className="country-name">{country.name.common}</p>
                  </Link>
                </div>
                 
                )
            })}
        </div>
    )
}

export default HomePage;