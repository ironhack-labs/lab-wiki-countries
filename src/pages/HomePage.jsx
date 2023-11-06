import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function HomePage() {
    const [fetching, setFetching] = useState(true)
    const [countryList, setCountry] = useState([""])
    let countryJSON = "https://ih-countries-api.herokuapp.com/countries"

    useEffect(()=>{
    axios.get(countryJSON).then((response)=>{
        setCountry(response.data);
        setFetching(false);
        console.log(countryList)
    })
},[])

    return(
        <div>
        <h1>WikiCountries: Your Guide to the World</h1>
        {fetching && <p>Loading</p>}
        {!fetching &&
        countryList.map((country) =>{
        return(
            <Link to={`/${country.alpha3Code}`} key={countryList.indexOf(country)}>
            <div >
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                <h3>{country.name.common}</h3>
            </div>
            </Link>
        )}
         )}
        </div>
    )
}

export default HomePage;
