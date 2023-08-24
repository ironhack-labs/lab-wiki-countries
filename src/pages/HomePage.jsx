import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function HomePage() {
   const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
        .then(response => {
            setCountries(response.data);
        })
    }, []);

    console.log(countries);

    return(
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>
            {/* {fetching && <p>Loading</p>} */}
            {countries.map((country) =>{
                return(
                    <div key={country._id}>
                        <Link to={`/countrydetails/${country.alpha3Code}`}>
                            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{country.name.common}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default HomePage;