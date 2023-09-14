import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function HomePage() {

    const baseURL = "https://ih-countries-api.herokuapp.com"

    const [countries, setCountries] = useState(null)

    useEffect(() => {
        axios.get(baseURL + '/countries')
            .then(response => {
                setCountries(response.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, []);

    const renderList = () => {
        if (countries === null) {
            return <p>loading....</p>
        }

        return (countries.map((countryObj, index) => {
            return (
                <Link to={country.alpha3Code} key={index} >
                    <h3>{countryObj.name}</h3>
                </Link>
            );
        }))
    }

    return (
        <>
            <div >
                <h1>WikiCountries: Your Guide to the World</h1>
                <div>{renderList()}</div>
            </div>


        </>
    )
}

export default HomePage;
