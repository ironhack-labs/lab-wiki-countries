import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CountriesList() {
    const [countries, updateList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await axios.get('https://restcountries.eu/rest/v2/all');

            updateList(response.data);
        }

        getData();
    }, []);

    return (
        <div className="column-6 w-50">
            {
                countries.length === 0 ?
                <h1>Loading...</h1> :
                countries.map((country, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/countries/${country.alpha3Code}`}>
                                {country.name}
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default CountriesList
