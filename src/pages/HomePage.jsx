import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css"



function HomePage() {

    const [countries,setCountries] = useState([])
    const [copyOfCountries,setCopyOfCountries] = useState([])

    useEffect(()=>{
    
        axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then((allCountries)=>{
          console.log(allCountries.data)
          setCountries(allCountries.data)
          setCopyOfCountries(allCountries.data)
      
        })
    },[])

    
    return (
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>
            <div className="countries-container">
                {countries.map((oneCountry) => {
                    const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`;
                    return (
                        <Link to={`/country/${oneCountry.alpha3Code}`} className="country-box" key={oneCountry.alpha3Code}>
                            <img src={flagUrl} alt={`${oneCountry.name.common} flag`}/>
                            <h5>{oneCountry.name.common}</h5>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default HomePage;
