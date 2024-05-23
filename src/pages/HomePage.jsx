
import {useState, useEffect} from "react"; 
import axios from "axios";
import './HomePage.css';
import { Link } from 'react-router-dom';


function HomePage() {

    const [countries, setCountries] = useState([]); 

    useEffect(()=> {
        const fetchCountires = async () => {

            try {
                const response = await axios.get("https://ih-countries-api.herokuapp.com/countries"); 
                console.log(response.data); 
                setCountries(response.data);
            }catch (error) {
                console.error("error Fetching Data", error); 
            }
        }; 
        fetchCountires(); 
    }, []); 
    return (
        <div className="container">
        <h1 className ="heading">WikiCountries: Your Guide to the World</h1>
        <ul className="list">
            {countries.map((country) => (
                <li key={country.alpha3Code} className="list-item">
                
                <Link to={`/${country.alpha3Code}`}> 
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                {country.name.common}
                </Link>
                </li>
            ))}
        </ul>
        </div>
        
    );
}; 

export default HomePage;
