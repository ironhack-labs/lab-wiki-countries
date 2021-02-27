import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function CountryDetails() {

    const [data, setData] = useState({})
    const { country } = useParams()

    useEffect(()=>{
        const getDetails = async (code) => {
            const respuesta = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
            setData(respuesta.data)
        }
        getDetails(country)
    },[])

    
    return (    
                    <>
                    <div>
                    <img width="100" src={data.flag}/>
                    <ul>
                    <li>Borders: {data.borders}</li>
                    <li>Capital: {data.capital}</li>
                    <li>Area: {data.area}</li>
                    </ul>
                    </div>
                    </>
    )
}
