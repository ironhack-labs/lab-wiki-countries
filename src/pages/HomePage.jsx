import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  

const apiURL ="https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
    // const [fetching, setFetching] = useState(true);
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        console.log("here something")
        axios.get(apiURL).then((response) => {
            setCountries(response.data);
            // setFetching(false);
        });
    }, [])

    return(
        <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
           
            {countries.map((country) => {
                return (
                    <div key={country._id}>
                        
                        <h3>
                            <Link to={`/:countryId/${country.alpha2Code.toLowerCase()}`}>
                                {country.name.official}
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                            </Link>
                            
                        </h3>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage;
