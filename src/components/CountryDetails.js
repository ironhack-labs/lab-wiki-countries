import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom"

function CountryDetails(props){
    const {id} = useParams()
    const [country, setCountry] = useState("")
    
    useEffect(() => {
        setCountry(props.countries.find(countr => countr.alpha3Code === id));
    }, [id, props.countries])

    return (
        <>
            <h2>{country.name.common}</h2>
            <p>How do you like this country?</p>
            
        </>
    )
}

export default CountryDetails