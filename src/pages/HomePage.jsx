import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const apiURL =  "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
    const [countryArr, setCountryArr] = useState("");
    const [fetchStatus, setFetchStatus] = useState(true);

    useEffect(()=>{
        async function getCountries(){
            const countriesApi = await axios.get(apiURL);
            console.log(countriesApi);
            setCountryArr(countriesApi.data)
            setFetchStatus(false)
        }
        getCountries()
    }, [])
    return(
        <div id="homepage" >
            <h1>WikiCountries: Your Guide to the World</h1>
            <div id="country-container">
                {fetchStatus && <p>Fetching country data</p>}
                {!fetchStatus && 
                    <ul className="list-group" style={{ maxHeight: "80vh", overflow: "scroll" }}>
                    { countryArr.map((country, i)=>{
                    return <div className="country-div-homepage" key={i}>
                        <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                            <li>{country.name.common}</li>
                        </Link>
                    </div>
                    })}
                    </ul>
                }
            </div>
        </div>
    )
}

export default HomePage;
