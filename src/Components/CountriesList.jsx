import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function CountriesList({ countriesData }) {
    const [countries, setCountries] = useState([]);

    // useEffect(() => {
    //     setCountries(countriesData);
    // }, []);

    useEffect(() => {
        axios
            .get('https://ih-countries-api.herokuapp.com/countries')
            .then(({ data }) => {
                setCountries(data);
            })
    }, [])



    return (
        <div>
            <h2>Countries</h2>
            {countries.map((country) => {
                return (
                    <div key={country.alpha3Code} className="country">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                        <Link to={`/${country.alpha3Code}`}>{country.name.official}</Link>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default CountriesList;