import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function HomePage() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries")
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }, []);


    return (
        <div>
            <h1>"WikiCountries: Your Guide to the World"</h1>

            {countries.map((country) => {
                return (
                    <div className="eachCountry" key={country._id}>
                        <div>
                            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>

    )
}



export default HomePage;
