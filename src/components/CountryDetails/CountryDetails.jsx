import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios'

function CountryDetails({ state }) {

    const { countryID } = useParams()

    const [countries, setCountries] = useState([]);
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fecthCountries();
    }, []);

    const fecthCountries = () => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryID}`)
            .then(({ data }) => {
                setCountries(data)
                setFetching(false)

            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Detalles del País</h1>
            <p>{countryID}</p>
            {
                fetching ? <h1>Cargando</h1> : <div>
                    <p>{countries.name.common}</p>
                    <p>{countries.capital}</p>
                    <p>{countries.area}</p>
                </div>
            }
            <hr />


        </div>
    );
}
export default CountryDetails;


