import countriesJSON from '../data/countries.json';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

function HomePage() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        console.log("mount");
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then((response) => {
                setCountries(response.data)
            });
        return () => {
            console.log("unmount");
        };
    }, []);
    
    if (countries.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>WikiCountries: Your Guide to the World</p> 
            <div className="list-group">
                {countries.map((country) => {
                    return <Link to={`/${country.alpha3Code}`} key={country._id} className="list-group-item list-group-item-action"><img style={{width: '30px', marginRight: '10px'}} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>{country.name.common}</Link>
                }
                )}
            </div>
        </div>
    )
}

export default HomePage;
