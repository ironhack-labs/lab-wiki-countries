import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {

    const apiURL = "https://ih-countries-api.herokuapp.com/countries"

    const [countries, setCountries] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(()=>{
        axios.get(apiURL).then((response)=>{
            setCountries(response.data);
            setFetching(false)
        })
        console.log(countries)
    }, [])

    return(
        <div className="home">
            <h2 className="home-title">WikiCountries: Your Guide to the World</h2>
            {fetching && <p>Loading</p>}
            {!fetching && countries.map((country)=>{
                return(
                    <div key={country._id} className="flags">
                        
                        <div>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                        </div>
                        <div  className="countries">
                            <Link to={`/${country.alpha3Code}`}> {country.name.common}</Link>
                        </div>
                    </div>
                ) 
            })}
        </div>   
    )}

export default HomePage;
