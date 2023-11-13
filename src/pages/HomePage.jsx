import { link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function HomePage() {

    const [country, setCountry] = useState([])

    useEffect(()=>{
        axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then(response =>{
            setCountry(response.data)
        })
        .catch(error => {
            console.error('There is error', error);
        })
    }, [])



    return (
        <>
        <div>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>WikiCountries: Your Guide to the World</p>
        {country.map((elm) =>{
            return (
                <>
                <Link to={`/${elm.alpha3Code}`}>
                    <p>{elm.name.common}</p>
                </Link>
                </>
            )
        })}




        </div>
        </>
    )
}

export default HomePage;
