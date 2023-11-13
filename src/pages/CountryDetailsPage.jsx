import { link } from "react-router-dom"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function CountryDetails() {

   
    const { countryId: country_alpha3 } = useParams()
    const [details, setDetails] = useState()
    useEffect(()=>{
        axios.get(`https://ih-countries-api.herokuapp.com/countries/${country_alpha3}`
        .then(response => {
            setDetails(response.data)
        })
        )
    }, [country_alpha3])

    if(!details){
        return (<p>Loading...</p>)
    }


    return (
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Country Details</p>
    )
}

export default CountryDetails;
