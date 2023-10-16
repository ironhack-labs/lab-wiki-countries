import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
    const [countries, setCountries] = useState([]); 

    useEffect(() => {
            const fetchCountries = async () => {
            try {
                const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
                setCountries(response.data);
            } catch (error) {
                console.error("There was an error when obtaining the country data:", error);
            }
        };
        fetchCountries();
    }, []);
    return (
        <div>
            <h1>WikiCountries: Your Guide to the World</h1>
            <ul className='list-group'>
                {countries.map(country => (
                    <li key={country.alpha3Code} className='list-group-item'>
                        <Link to={`/${country.alpha3Code}`}>
                            <img
                                 src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                                 alt={`Flag of ${country.name.common}`}
                            />
                            {country.name.common}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
