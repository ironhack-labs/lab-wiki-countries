import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [country, setCountry] = useState([])

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
            .then(response => setCountry(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
                {country.map(eachCountry => {
                    return (
                        <Link
                            to={eachCountry.alpha3Code}
                            className="list-group-item list-group-item-action"
                            key={eachCountry._id}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt={eachCountry.alpha2Code} />
                            <br />
                            {eachCountry.name.common}
                        </Link>)
                })}
            </div>
        </>
    )
}

export default HomePage;
