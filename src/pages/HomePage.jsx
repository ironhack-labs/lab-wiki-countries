import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function HomePage() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
            .then((response) => {
                setCountries(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

    return (
        <div className="home-page">
            <h1>WikiCountries: Your Guide to the World</h1>
            {countries.map((country, i) => {
                return (
                    <section className="countries-list">
                        <NavLink to={`/${country.alpha3Code}`} key={i}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country flag"/>
                            <p>{country.name.common}</p>
                        </NavLink>
                    </section>
                )
            })}
        </div>
    )
}

export default HomePage;
