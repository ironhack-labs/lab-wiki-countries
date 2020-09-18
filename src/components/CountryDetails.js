import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom"
import axios from "axios"

const CountryDetails = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    let [countryDetail, setCountryDetail] = useState(null)
    let urlAPI = "https://countries.tech-savvy.tech/countries"
    let urlAPI2 = "https://restcountries.eu/rest/v2/alpha/"

    async function fetchData() {
        setIsLoading(true);    
        const result = await axios(`https://restcountries.eu/rest/v2/alpha/${props.match.params.id}`);
        //setCountryDetail(result.data[0]) //Api de CountriesTech trae siempre un array
        setCountryDetail(result.data)
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData()
    },[])


    useEffect(() => {
        setCountryDetail(null)
        fetchData()
        
    },[props.match.params.id])

    useEffect(() => {
        return () => {
            console.log(`Desmontado`)
        }
    }, [])

    return (isLoading && !countryDetail) ?
    (
        <div>Cargando...</div>
    )
    :        
    (
        <div className="col-7">
            <h1>{countryDetail.name}</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Flag</th>
                        <td><img style={{width: "200px", height:"100px", objectFit:"cover"}} 
                            alt={countryDetail.name} src={countryDetail.flag}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Capital</th>
                        <td>{countryDetail.capital}</td>
                    </tr>
                    <tr>
                        <th>Area</th>
                        <td>{countryDetail.area}km<sup>2</sup></td>
                    </tr>
                    <tr>
                        <th>Borders</th>
                        <td>
                            <ul>
                            {
                                countryDetail.borders.map((country, index) => {
                                    return <li key={index}>
                                    <NavLink 
                                        key={index}
                                        className={"list-group-item list-group-item-action"}
                                        exact to={"/" + country}>{country}
                                    </NavLink> 
                                    </li>
                                })
                            }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails
