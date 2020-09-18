import React, {useState, useEffect, useRef} from 'react'
import { NavLink } from "react-router-dom"
import axios from "axios"

const CountriesList = () => {

    let urlAPI = "https://countries.tech-savvy.tech/countries"
    let urlAPI2 = "https://restcountries.eu/rest/v2/all"

    const [isLoading, setIsLoading] = useState(true);
    let [countriesAPI, setCountriesAPI] = useState(null)   

    async function fetchData() {
        setIsLoading(true);
        //Cambie API Url porque usar CCA3 de links luego daba resultados no esperados de la API
        const result = await axios(urlAPI2);
        setCountriesAPI(result.data)
        setIsLoading(false);
    }
    
    useEffect(() => {
        fetchData();
    },[])

    return isLoading && !countriesAPI ?
    (
        <div>Cargando...</div>
    )
    :
    (
        <div className="col-5" style={{maxHeight: "90vh", overflow:"scroll" }}>
            <div className="list-group">{
                countriesAPI.map((country, index) => {
                    return <NavLink 
                                key={index}
                                className={"list-group-item list-group-item-action"}
                                activeClassName="active"
                                exact to={"/" + country.alpha3Code}>{country.name}
                            </NavLink> 
            })
            }
            </div>        
        </div>
    )
}

export default CountriesList
