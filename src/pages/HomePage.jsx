import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function HomePage() {
    const [countries, setCountries] = useState([])
    const fetchApi = "https://ih-countries-api.herokuapp.com/countries"
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        axios.get(fetchApi).then((response)=>{
            setCountries(response.data)
            console.log(countries)
            isLoading(false);
        })
      }, [])
    return(
        <div className="container" style={{maxHeight: "90vh", overflow: scroll}}>
            <h2 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h2>
            {loading ? <p>Loading...</p> : countries.map((country)=>{
                return(<div key={country._id}>
                    <Link to={`/${country.alpha3Code}`}>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                        <h3>{country.name.common}</h3>
                    </Link>
                </div>)
            }) }
        </div>
    )
}

export default HomePage;
