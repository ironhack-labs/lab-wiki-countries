
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
    const [fetching, setFetching] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setCountries(response.data);
            setFetching(false);
        });
    }, []);

    return (
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>
            <h1>
                {countries.map((country) => {
                    return (
                        <div key={country._id}>
                            <li>


                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="Flag" />
                                <Link to={`/${country.alpha3Code}`}>
                                    {country.name.common}
                                </Link>



                            </li>
                        </div>
                    )
                })}
            </h1>
        </div>
    );
}

export default HomePage;
