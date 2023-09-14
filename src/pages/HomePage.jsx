import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function HomePage() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
            .then(response => {
                console.log(response)
                setCountries(response.data);
            })
            .catch((e) => {
                console.log("error getting coutries from the API....", e);
            });
    }, []);

    return (
        <>
            <h1>WikiCountries: Your Guide to the World </h1>
            {countries.map((countriesObj, index) => {
                return (
                    <section key={index} className='card' >
                        <Link to={`${countriesObj.alpha3Code}`}><h3>{countriesObj.name.common}</h3></Link>
                    </section>
                )
            }
            )}
        </>
    )
}



export default HomePage;
