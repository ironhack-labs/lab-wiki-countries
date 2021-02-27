import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'


export default function CountriesList() {

    const [countries, setCountries] = useState([])

    useEffect(() => { 
        const getInfoCountries = async () => {
          const respuestaServidor = await axios.get("https://restcountries.eu/rest/v2/all") 
          const paises = await respuestaServidor.data
          setCountries(paises)       
        }
        getInfoCountries()        
    }, []) 
  
    //console.log(countries)



    return (
        <>
        <div>
            {countries.map((e, id)=> {
                return(
                    <ul key={id}>
                     <li>
                    <Link to={`/countries/${e.alpha3Code}`}>{e.name}</Link>
                    </li>
                    </ul>
                )
            })}
        </div>
        </>
    )
}
