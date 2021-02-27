import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
    Link,
    useParams
  } from 'react-router-dom'

export default function CountryDetails() {

    const [data, setData] = useState({})
//para sacar parametros, la variable se tiene que llamar como en la ruta del app.js
    const {details} = useParams()
    //console.log(details)

    useEffect( ()=> {
        const getCountryDetails = async (codigo) => {
            const respuesta = await axios.get(`https://restcountries.eu/rest/v2/alpha/${codigo}`)
            console.log(respuesta)

            setData(respuesta.data)
        }
        getCountryDetails(details)
    }, [])

    
    return (
        <div>

            <ul>
                <li>Capital: {data.capital}</li>
                <li>Area: {data.area}</li>
                <li>Borders: {data.borders}</li>
            </ul>
            
        </div>
    )
}
