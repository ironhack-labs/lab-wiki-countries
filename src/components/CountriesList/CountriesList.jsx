import countriesData from "./../../countries.json"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function CountriesList() {

    const [countries, setCountries] = useState([])

    useEffect(() => {

        fetch(`https://ih-countries-api.herokuapp.com/countries`)
            .then((response) => response.json())
            .then((countriesData) => setCountries(countriesData));
    }, []);


    return <div>
        <h2>Lista de Paises</h2>
        {countries.map((elem) => {
            return (
                <div key={elem.alpha2Code} className="countries">
                    <Link to={`/${elem.alpha3Code}`}>{elem.alpha3Code}</Link>
                    <hr />
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt="" />

                </div>
            )
        })}
    </div>



}


export default CountriesList
