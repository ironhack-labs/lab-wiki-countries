import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function HomePage() {

    const [fetching, setFetching] = useState(true)
    const [countries, setCountries] = useState([])
    const{countryId} = useParams()

    useEffect(()=>{
        axios.get('https://ih-countries-api.herokuapp.com/countries').then((response) => {
            setCountries(response.data);
            setFetching(false)
            console.log(response.data)
        })
    }, [])


    return(
        <div>
            <h2>WikiCountries: Your Guide to the World</h2>
            {fetching && <p>Loading...</p>}
            {countries.map((country)=>{
                return(
                    
                    <div key = {country._id}>
                    {console.log(country.alpha2Code.toLowerCase())}
                        <Link to={`/${country.alpha3Code}`}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
                            <h5>{country.name.common}</h5>
                        </Link>  
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage;
