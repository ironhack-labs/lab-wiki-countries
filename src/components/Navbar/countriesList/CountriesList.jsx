import { useEffect, useState } from "react";
/* import CountriesArray from "../../../countries.json" */
import { Link } from "react-router-dom";


const CountriesList = () => {


    const [countries, setCountries] = useState([])


    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(res => res.json())
            .then(countriesArray => setCountries(countriesArray))
    }, [])

    /*     useEffect(() => {
            setCountries(CountriesArray)
        }, []) */

    return (
        <div>
            {countries.map((countries) => {
                console.log(countries)
                return (
                    <div className="countrie">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countries.alpha2Code.toLowerCase()}.png`} alt=''></img>
                        <Link to={`/details/${countries.alpha3Code}`}>{countries.name.common}</Link>
                        <hr />
                    </div>
                );
            })}
        </div>
    )



}


export default CountriesList

