import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


function CountriesList(props) {

    const [countries, setCountries] = useState([]);

    useEffect(async () => {
        const response = await fetch('https://countries.tech-savvy.tech/countries');
        const data = await response.json();

        setCountries(data);
    }, []);


    return (
        <div className="list-group">
            <ul>
                {countries.map((count, i)=>(
                    <li key={i}>
                        <Link className="list-group-item list-group-item-action" to={`/country${count.cca3}`}>{count.name.common}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountriesList;