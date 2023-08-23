import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const HomePage = () => {

    const [countries, setCountries] = useState([])


    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
            .then(response => {
                setCountries(response.data)
                // console.log(response.data);
            })
    }, [])
    console.log(countries);


    return (
        <div>
            <h2>Countries</h2>
            <ul>
                {countries.map((country) => {
                    return (
                        <Link to={`/${country.alpha3Code}`}>
                            <li key={country._id} className="country">
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
                                <h3>{country.name.official}</h3>
                            </li>
                        </Link>

                    )
                })}
            </ul >
        </div >
    )
}




export default HomePage;
