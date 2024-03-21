import {useState,useEffect} from 'react';
import { Link}  from 'react-router-dom'

function HomePage() {
    const [countries, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(response => response.json())
            .then(data => {
                setCountry(data)

            })
    }, []);

    return (
        <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
            
            <ul>
                {countries.map(country => (
                    <li key={country._id}>
                        <Link to={`/${country.alpha3Code}`}>
                            {country.name.common}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}
            


export default HomePage;
