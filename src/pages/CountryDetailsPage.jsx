import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {
    const [country, setCountry] = useState({})
    const [Loading, setLoading] = useState(true)
    const { alpha3Code } = useParams()

    console.log(alpha3Code)
    useEffect(() => {
        axios.get("https://ih-countries-api.herokuapp.com/countries").then((countriesObj) => {
            //console.log(countriesObj)
            const foundCountry = countriesObj.data.find((oneCountry) => {
                return oneCountry.alpha3Code === alpha3Code
            })
            setCountry(foundCountry)
            setLoading(false)
        })
    }, [alpha3Code])

    if (Loading==false){

        return (
            <>
                <h1>Country Details</h1>
                <h2 className="countryName">{country?.name?.common || null}</h2>
                <div className="tableDiv">
                    <p>Capital</p>
                    <p>{country?.capital || null}</p>
                </div>
                <div  className="tableDiv">
                    <p>Area</p>
                    <p>{country?.area + " m2" || null}</p>
                </div>
                <div  className="tableDiv">
                    <p>Borders</p>
                    <div>
                        <ul>
                            {country?.borders?.map((oneBorder) => {
                                return (
                                    <li><Link to={`/${oneBorder}`}>{oneBorder}</Link></li>
                                    
                                )
                            }) || null}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
    
    else{
        return(
            <h1>Loading ...</h1>
        )
    }
    
}

export default CountryDetails;
