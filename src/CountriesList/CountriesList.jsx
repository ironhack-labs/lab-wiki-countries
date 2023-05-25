import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Countries from '../countries.json'
import Axios from 'axios'
const CountriesList = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {                            // Fase de montaje
        console.log('el componente ya está completamente montado')
        Axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then((response) => {
                setCountries(response.data)
            })
            .catch()
        // axios.get('la_url_de_la_api')        // Supuesta llamada de AJAX para actualizar los datos en el estado    
    }, [setCountries])

    return (
        <div>
            <h1>Countries</h1>
            {countries.map((country, i) => {
                return (
                    <div key={i} className="col-5">
                        <h3>{country.name.common}</h3>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country" />
                        <Link to={`/${country.alpha3Code}`}>Ver detalles</Link>
                    </div>
                )
            })}
        </div>

    )
}
export default CountriesList