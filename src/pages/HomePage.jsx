import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <h1>
                WikiCountries: Your Guide to the World
            </h1>
        
            {countries ? countries.map((country) => {
            
            return (
                <>
                <Link to={`/${country.alpha3Code}`}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country._id.alpha2Code}.png`} />

                    <h1>{country.name.common}</h1>
                </Link>
                </>
            )
            }) : (<p>loading...</p>)}

        </>
    )
}

export default HomePage;
