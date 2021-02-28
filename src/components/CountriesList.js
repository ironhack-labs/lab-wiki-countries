import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import {
    Link
} from 'react-router-dom'


export default function CountriesList() {

    const [countriesList, setCountriesList] = useState([])

    useEffect(()=>{

        const getCountries = async () => {

            const respuestaServidor = await axios.get("https://restcountries.eu/rest/v2/all")

            const countries = await respuestaServidor

            setCountriesList(countries.data)



        }
        getCountries()
    },[])


    return (
        <div>

        {countriesList.map((element,id)=>{

            return(
                <p key={id}>
                
                <Link to={`/countries/${element.alpha3Code}`}><img alt={element.name}width="20px"src={element.flag}/> - {element.name}</Link>
                
                
                </p>
            )

        })}
            
        </div>
    )
}
