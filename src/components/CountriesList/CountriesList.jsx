import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './CountriesList.css'
// import countriesData from '../../countries.json'

function CountriesList() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries`)
            .then(res => res.json())
            .then(countriesData => setCountries(countriesData))
    }, [])

    return (
        <div>
            <h2>Lista de Países</h2>

            {countries.map(country => {
                return (
                    <div>
                        <h2>{country.name.common}</h2>
                        <div key={country.alpha3Code} className='eachCountry' />
                        <Link to={`/countries/${country.alpha3Code}`}> </Link>
                        {<img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} className="flagCountry" />}
                        <br />
                        <br />
                        <Link to={`/${country.alpha3Code}`}>Ver Detalles</Link>

                        <br />
                    </div>
                )
            })}
        </div>
    );
}

export default CountriesList