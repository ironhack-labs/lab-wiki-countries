/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails(){
    const [country, setCountry] = useState("")
    const [fetchStatus, setFetchStatus] = useState(true)
    const {countryId} = useParams();
    const apiUrl =  `https://ih-countries-api.herokuapp.com/countries/${countryId}`
    useEffect(()=>{
        async function getCountryInfo(){
            const countryApi = await axios.get(apiUrl)
            const countryData = countryApi.data
            console.log(countryData);
            setCountry(countryData)
            setFetchStatus(false)
            console.log(country);
        }
        getCountryInfo()
    }, [countryId])
    return (
        <>
            <h1 style={{fontSize: "24px", fontWeight: "bold", marginBottom: "10%"}}>Country Details</h1>

            {fetchStatus && <h2>Loading...</h2>}
            {!fetchStatus && 
                <>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" /> 
                    <h2>{country.name.common}</h2> 
                    <table className="table">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{width: "30%"}}>Capital</td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.area} km<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                {country.borders.length===0 && <p>No borders</p>}
                                {country.borders.length>0 && country.borders.map((border, i)=>{
                                    return <li key={i}><Link to={`/${border}`}>{border}</Link></li>  
                                       
                                })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </>
                
            }

        </>
    )
}

export default CountryDetails;

