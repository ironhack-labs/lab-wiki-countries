import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import countriesData from "../../countries.json";

function CountriesList() {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch(' https://ih-countries-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(countriesData => setCountries(countriesData))

    }, [])

    return (
        <div className="listbox">
            <h2>Countries List</h2>
            {countries.map((country) => {

                return (
                    <div key={country.alpha3Code} className="country">
                        <h5>{country.name.official}</h5>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='' />
                        <br></br>
                        <Link to={`/${country.alpha3Code}`}>Ver detalles</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default CountriesList;