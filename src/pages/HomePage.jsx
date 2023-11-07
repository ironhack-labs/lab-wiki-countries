import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {

    const [countries, setcountries] = useState([""]);

    const [fetching, setFetching] = useState(true);

    const apiUrl = "https://ih-countries-api.herokuapp.com/countries";

    useEffect(()=>{
        axios.get(apiUrl).then((response)=>{
            setcountries(response.data);
            setFetching(false);
        })
    }, [])

    return(
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>
            {fetching && <p>Loading</p>}
            {!fetching && countries.map((country)=> // DO NOT FORGET TO USE RETURN WHEN USING MAP
            {
                return(
                <div key={country._id}>
                   <ul>
                   <Link to={`/${country.alpha3Code}`}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                    <li>{country.name.common}</li>
                    </Link>
                   </ul>
                </div>)
        })
    }
    </div>
    )
}

export default HomePage;
