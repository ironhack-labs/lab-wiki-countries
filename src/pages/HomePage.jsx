import { useEffect, useState } from "react"; // React hooks
import axios from "axios"; // to get request from API URL
import { Link } from "react-router-dom"; // Routing

// Create a function HomePage that display a list of countries
function HomePage() {
    // Hold an array of country data retrieved from the API
    const [countries, setCountries] = useState([""]);
    // Indicate the data is still being loaded
    const [loading, isLoading] = useState(true);
    // API URL
    const apiUrl = "https://ih-countries-api.herokuapp.com/countries";
    // Get the request to de API for the countries data
    useEffect(()=>{
        axios.get(apiUrl).then((apiResponse)=>{
            setCountries(apiResponse.data);
            isLoading(false);
            // Check
            console.log(apiResponse)
        })
        // An empty dependency array for one-time initialization, 
        // ensuring that the code inside it runs when the component is first mounted.
    },[])

    // Rendering the page
    return (
        <div >
            <h1>WikiCountries: Your Guide to the World</h1>
            <div>
                {/* If the loading is true */}
                {loading && <p>Loading</p>}
                {/* If the loading is false */}
                {!loading && countries.map((country) =>{
                return(
                    <Link to={`/${country.alpha3Code}`} key={countries.indexOf(country)}>
                    <div >
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                        <h3>{country.name.common}</h3>
                    </div>
                    </Link>
                    )}
                )}
            </div>
        </div>
    )
}

export default HomePage;
