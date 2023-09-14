import { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";



function HomePage() {

    const baseURL = "https://ih-countries-api.herokuapp.com/";
    const [countryList, setCountryList] = useState([])


    useEffect( () => {
        axios.get(baseURL+"countries")
        .then(response => {setCountryList(response.data)})
        .catch(e=> console.log("error",e))
    }, [])

    return(
        <>

        <h1>WikiCountries: Your Guide to the World</h1>
        {countryList.map((country)=> {
            return(
                <div key={country._id}>
                    <Link to ={country.alpha3Code}>{country.name.common }</Link>
                    <img src={"https://flagpedia.net/data/flags/icon/72x54/"+country.alpha2Code.toLowerCase()+".png"} alt="" />
                </div>
                
            )
        })}
        

        
        </>)
        
}

export default HomePage;
