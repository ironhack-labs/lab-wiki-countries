import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "https://ih-countries-api.herokuapp.com";

function HomePage() {
    const [countries, setCountries] = useState([]);

    const getCountries = () => {
        axios
            .get(`${BASE_URL}/countries`)
            .then((response) => {
                const countriesData = response.data;
                setCountries(countriesData)
            })
            .catch(err => console.log(err));
    };
    useEffect(() => {
        getCountries();
    }, [])
    return (
        <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
                {console.log(countries)}
                
                {countries.map(country => (
                    <Link
                        key={country._id}
                        className="list-group-item list-group-item-action"
                        to={`/${country.alpha3Code}`}
                    >
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.official} />
                        <p>{country.name.official}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
